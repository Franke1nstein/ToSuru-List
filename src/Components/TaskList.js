import React from 'react';
import Task from '../Components/Task';
import './Style.css';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
