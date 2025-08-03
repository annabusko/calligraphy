import { useState } from 'react';
import { SubTask, SubtaskType, Template } from './TaskBuilder.types';
import { templates } from './templates';

export const TaskBuilder = () => {
  const [template, setTemplate] = useState<Template>(templates.T1);
  const [subTasks, setSubTasks] = useState<SubTask[]>(templates.T1.defaultSubTasks);

  const handleChangeSubTaskText = (value: string, index: number) => {
    const newSubTasks = [...subTasks];
    newSubTasks[index].text = value;
    setSubTasks(newSubTasks);
  };

  const handleChangeType = (value: SubtaskType, index: number) => {
    const newSubTasks = [...subTasks];
    newSubTasks[index].type = value;
    setSubTasks(newSubTasks);
  };

  const handleChangeTemplate = (id: string) => {
    const newTemplate = templates[id];
    setTemplate(newTemplate);
    setSubTasks(newTemplate.defaultSubTasks);
  };

  const generate = () => {
    console.log('Generated task:', { template, subTasks });
  };

  return (
    <div className="p-4 space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium">Template</label>
        <select
          className="border p-2 rounded w-full"
          value={template.id}
          onChange={(e) => handleChangeTemplate(e.target.value)}
        >
          {Object.keys(templates).map((key) => (
            <option key={key} value={key}>
              {templates[key].name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {subTasks.map((subtask, index) => (
          <div key={index} className="border p-4 rounded space-y-2">
            <div>
              <label className="block text-sm font-medium">Type</label>
              <select
                className="border p-1 rounded w-full"
                value={subtask.type}
                onChange={(e) => handleChangeType(e.target.value as SubtaskType, index)}
              >
                <option value="Handwriting">Handwriting</option>
                <option value="Math">Math</option>
              </select>
            </div>

            {subtask.type === 'Handwriting' && (
              <div>
                <label className="block text-sm font-medium">Text</label>
                <textarea
                  className="border p-2 rounded w-full"
                  value={subtask.text || ''}
                  onChange={(e) => handleChangeSubTaskText(e.target.value, index)}
                  maxLength={50}
                  rows={2}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button onClick={generate} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Preview & Print
      </button>
    </div>
  );
};
