import React, { useState } from 'react';

function TodoList() {
  // State to hold the to-do items
  const [todos, setTodos] = useState([]);

  // Function to add a new to-do item
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  // Function to toggle the completion status of a to-do item
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo, index) => (index === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  // Function to remove a to-do item
  const removeTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const text = e.target.elements.todoText.value;
        addTodo(text);
        e.target.elements.todoText.value = '';
      }}>
        <input type="text" id="todoText" placeholder="Enter a new to-do item" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
