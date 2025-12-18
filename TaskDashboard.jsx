import { useState } from "react";

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-96">
        <h1 className="text-xl font-bold mb-4 text-center">Task List Dashboard</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-1 border rounded px-2 py-1"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-3 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded"
            >
              <span>{task}</span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
