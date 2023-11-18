import prisma from "../../configs/db";

const getResultsById = (userId: number) => {
  const userTasks = prisma.task.findMany({
    where: {
      patientId: userId,
    },
    select: {
      id: true,
    },
  });

  return userTasks.then((tasks) => {
    if (tasks.length > 0) {
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
        .then((results) => {
          const formattedResults: any[] = [];
          let currentDate: any = null;
          let currentGroup: any = null;

          results.forEach((result) => {
            const resultDate = result.create_at.toISOString().split("T")[0];

            if (resultDate !== currentDate) {
              currentGroup = {
                date: resultDate,
                data: [],
              };
              formattedResults.push(currentGroup);
              currentDate = resultDate;
            }

            currentGroup.data.push({
              id: result.id,
              taskId: result.taskId,
              session: result.session,
              poseId: result.poseId,
              score: result.score,
              videoNormal: result.videoNormal,
              videoBone: result.videoBone,
            });
          });

          return formattedResults;
        });
    }

    return null;
  });
};

export default getResultsById;
