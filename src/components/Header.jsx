import { useState } from 'react';
import PropTypes from 'prop-types'; 

function Header({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <header className="header">
      <h2>My To-Do List</h2>
      <form onSubmit={handleAddTask} className="task-form">
        <input 
          type="text" 
          placeholder="Enter a new task..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="task-input"
        />
        <button type="submit" className="add-button">Add</button>
      </form>
    </header>
  );
}

// Define PropTypes for Header component
Header.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Header;
