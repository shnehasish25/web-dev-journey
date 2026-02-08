import React, { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState(['Revise HTML', 'Practice Flexbox']);

  const addTask = () => {
    setTasks(prev => [...prev, 'Master React State']);
  };

  const removeTask = (index) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <ul>
        {tasks.map((t, idx) => (
          <li key={idx}>{t} <button onClick={() => removeTask(idx)}>x</button></li>
        ))}
      </ul>
      <button onClick={addTask}>+ Add Task</button>
    </div>
  );
}
