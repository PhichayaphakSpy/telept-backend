import getResultsById from "./getResultsById";
import { IStat } from "../../interfaces/user";

const calculateStat = (results: any[]): IStat => {
  let totalScore = 0;
  let totalSessions = 0;

  results.forEach((result: any) => {
    const scores = result.data.map(
      (d: { score: string }) => parseFloat(d.score) || 0
    );
    const averageScore =
      scores.reduce((sum: any, score: any) => sum + score, 0) / scores.length;
    totalScore += averageScore;

    const sessions = result.data.map((d: { session: any }) => d.session);
    totalSessions += sessions.length;
  });

  const startDate = new Date(results[0].task.start_at);
  const endDate = new Date(results[0].task.end_at);
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const totalDays = diffDays;

  const accuracy = (totalScore / (results.length * 10)) * 100;
  const consistency =
    (totalSessions / (totalDays * results[0].task.sessionsperday.length)) * 100;

  return { accuracy, consistency };
};

const getStatById = async (userId: number): Promise<IStat> => {
  try {
    const result = await getResultsById(userId);
    const stat = calculateStat(result!);
    return stat;
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error;
  }
};

export default getStatById;
