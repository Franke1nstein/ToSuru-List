import React, { useState } from 'react';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import FilterTasks from './Components/FilterTasks';
import './Components/Style.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    return !task.completed;
  });

  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>Application de suivi des tâches</h1>
      <FilterTasks setFilter={setFilter} filter={filter} />
      <AddTask addTask={addTask} />
      <TaskList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
