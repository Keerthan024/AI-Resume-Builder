import { Plus, Trash2 } from 'lucide-react';
import React from 'react';

const AchievementForm = ({ data, onChange }) => {

  const addAchievement = () => {
    const newAchievement = {
      title: "",
      description: "",
      date: "",
    };
    onChange([...data, newAchievement]);
  };

  const removeAchievement = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateAchievement = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">Achievements</h3>
          <p className="text-sm text-gray-500">Add your achievements</p>
        </div>
        <button
          onClick={addAchievement}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
        >
          <Plus className="size-4" />
          Add Achievement
        </button>
      </div>

      <div className="space-y-4 mt-6">
        {data.map((achievement, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3">
            <div className="flex justify-between items-start">
              <h4>Achievement #{index + 1}</h4>
              <button
                onClick={() => removeAchievement(index)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="size-4" />
              </button>
            </div>

            <div className="grid gap-3">
              <input
                value={achievement.title || ""}
                onChange={(e) => updateAchievement(index, "title", e.target.value)}
                type="text"
                placeholder="Title"
                className="px-3 py-2 text-sm rounded-lg"
              />

              <input
                value={achievement.date || ""}
                onChange={(e) => updateAchievement(index, "date", e.target.value)}
                type="text"
                placeholder="Date (e.g., Jan 2024)"
                className="px-3 py-2 text-sm rounded-lg"
              />

              <textarea
                rows={3}
                value={achievement.description || ""}
                onChange={(e) => updateAchievement(index, "description", e.target.value)}
                placeholder="Describe your achievement..."
                className="w-full px-3 py-2 text-sm rounded-lg resize-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementForm;
