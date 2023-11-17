export interface IPose {
  name: string;
  videoLink: string;
  steps: string[];
  repeat: number;
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
}
