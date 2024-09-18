import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css'; 

function App() {
  // State to hold to-do items
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to remove a task by ID
  const removeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  // Function to toggle completion status
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to update task text
  const updateTask = (id, newText) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <Header addTask={addTask} />
      <ToDoList 
        tasks={tasks} 
        removeTask={removeTask} 
        toggleTaskCompletion={toggleTaskCompletion} 
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
