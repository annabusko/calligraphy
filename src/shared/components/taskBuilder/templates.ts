import { Template } from "./TaskBuilder.types";

export const templates: Record<string, Template> = {
  T1: {
    id: 'T1',
    name: 'Template 1',
    subTaskCount: 2,
    defaultSubTasks: [{ type: 'Handwriting', text: '' }],
  },
};