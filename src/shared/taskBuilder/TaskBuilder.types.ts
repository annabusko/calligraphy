export type SubtaskType = 'Handwriting';

export interface SubTask {
  type: SubtaskType;
  text?: string;
}

export interface Template {
  id: string;
  name: string;
  subTaskCount: number;
  defaultSubTasks: SubTask[];
}
