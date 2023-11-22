export interface IPose {
  name: string;
  videoLink: string;
  steps: string[];
}

export interface IAssignTaskPayload {
  taskName: string;
  sessionsperday: string[];
  start_at: string;
  end_at: string;
  poses: {
    poseId: number;
    repeat: number;
    long: number;
  }[];
  patientId: number;
  doctorId: number;
  criteria: {
    overAll: number;
    angle: number;
    time: number;
  };
}
  
export interface IAutoResultPayload {
  taskId: number;
  session: string;
  poseId: number;
  score?: number;
  videoNormal?: string;
  videoBone?: string;
}
