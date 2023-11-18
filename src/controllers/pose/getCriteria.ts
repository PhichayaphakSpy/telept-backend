import { Request, Response } from "express-serve-static-core";
import getCriteriaByTaskId from "../../services/pose/getCriteriaByTaskId";

const getCriteria = async (req: Request, res: Response) => {
  try {
    const taskId = parseInt(req.params["taskId"]);

    const criteria = await getCriteriaByTaskId(taskId);

    res.status(200).json(criteria);
  } catch (err) {
    res.status(500).json({ err });
  }
};

export default getCriteria;
