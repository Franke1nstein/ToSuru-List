import React from 'react';
import Reminder from '../Components/Reminder';
import './Style.css';

const Task = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        {task.name}
      </label>
      <button onClick={() => deleteTask(task.id)}>Supprimer</button>
      <Reminder task={task} />
    </li>
  );
};

export default Task;
