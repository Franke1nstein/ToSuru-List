import React, { useState } from 'react';
import './Style.css';

const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
    <label>Ajouter une tâche:</label>
    <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
    <button type="submit">Ajouter</button>
  </form>
  );
};

export default AddTask;
