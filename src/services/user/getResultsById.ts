import prisma from "../../configs/db";

const getResultsById = (userId: number) => {
  const userTasks = prisma.task.findMany({
    where: {
      patientId: userId,
    },
    select: {
      id: true,
      taskName: true,
      sessionsperday: true,
      start_at: true,
      end_at: true,
      Pose: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  const a = userTasks.then(async (tasks) => {
    if (tasks.length > 0) {
      const doctorGradedfromTask = await prisma.task.findMany({
        where: {
          patientId: userId,
        },
        select: {
          DoctorGraded: true,
        },
      });

      return prisma.session
        .findMany({
          where: {
            taskId: {
              in: tasks.map((task) => task.id),
            },
          },
          orderBy: {
            create_at: "asc",
          },
        })
        .then(async (results) => {
          const formattedResults: any[] = [];
          let currentGroup: any = null;

          const doctorGradedSet = new Set();

          for (const result of results) {
            const resultDate = new Date(result.create_at);
            const formattedDate = resultDate.toISOString().split("T")[0];

            if (!currentGroup || formattedDate !== currentGroup.date) {
              currentGroup = {
                date: formattedDate,
                task: tasks.find((task) => task.id === result.taskId),
                isdoctorgraded: false,
                doctorGraded: [],
                data: [],
              };
              formattedResults.push(currentGroup);
            }

            const doctorGradedSession = (await doctorGradedfromTask)
              .flatMap((task: any) => task.DoctorGraded)
              .find(
                (doctorGraded: any) =>
                  doctorGraded.taskId === result.taskId &&
                  doctorGraded.poseId === result.poseId &&
                  new Date(doctorGraded.date).toISOString().split("T")[0] ===
                    new Date(result.create_at).toISOString().split("T")[0]
              );

            let score;

            if (doctorGradedSession) {
              const overallWeight = 0.3;
              const angleWeight = 0.3;
              const timeWeight = 0.4;

              score = (
                overallWeight * doctorGradedSession.overAll +
                angleWeight * doctorGradedSession.angle +
                timeWeight * doctorGradedSession.time
              ).toFixed(1);

              currentGroup.isdoctorgraded = true;
              doctorGradedSet.add(doctorGradedSession);
            } else {
              score = result.score;
            }

            currentGroup.data.push({
              id: result.id,
              session: result.session,
              poseId: result.poseId,
              score: score,
              comment: doctorGradedSession ? doctorGradedSession.comment : "",
            });

            currentGroup.doctorGraded = Array.from(doctorGradedSet)
              .filter((item: any) => {
                return (
                  new Date(item.date).toISOString().split("T")[0] ===
                  formattedDate
                );
              })
              .sort((a: any, b: any) => a.poseId - b.poseId);
          }

          return formattedResults;
        });
    }

    return null;
  });

  return a;
};

export default getResultsById;
