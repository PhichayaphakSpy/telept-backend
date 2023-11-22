import prisma from "../../configs/db";

interface FormattedTask {
  name: string;
  poses: string[];
  sessions: string[];
}

interface FormattedData {
  date: Date;
  tasks: FormattedTask[];
}

const getUserHistory = async (userId: number): Promise<FormattedData[]> => {
  try {
    const tasks = await prisma.task.findMany({
      where: {
        patientId: userId,
      },
      include: {
        Pose: true,
        Session: true,
      },
    });

    const sessions = await prisma.session.findMany({
      where: {
        taskId: {
          in: tasks.map((task) => task.id),
        },
      },
    });

    const uniqueDates = Array.from(
      new Set(
        sessions.map((session) => session.create_at.toISOString().split("T")[0])
      )
    );

    const formattedData: FormattedData[] = uniqueDates.map((date) => {
      const tasksForDate = tasks.filter(
        (task) =>
          task.start_at.getTime >= new Date(date).getTime &&
          task.end_at.getTime <= new Date(date).getTime
      );

      return {
        date: new Date(date),
        tasks: tasksForDate.map((task) => {
          return {
            name: task.taskName,
            poses: task.Pose.map((pose) => pose.name),
            sessions: task.sessionsperday,
          };
        }),
      };
    });

    return formattedData;
  } catch (error) {
    console.error("Error fetching user history:", error);
    throw new Error("Internal Server Error");
  }
};

export default getUserHistory;
