// src/components/ToDoItem.jsx
import { useState } from 'react';
import PropTypes from 'prop-types'; 

function ToDoItem({ task, removeTask, toggleTaskCompletion, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    if (editedText.trim()) {
      updateTask(task.id, editedText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        className="checkbox"
      />
      {isEditing ? (
        <input 
          type="text" 
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className={`task-text ${task.completed ? 'completed' : ''}`}>{task.text}</span>
      )}
      <div className="action-buttons">
        {isEditing ? (
          <button onClick={handleSave} className="save-button">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
        )}
        <button onClick={() => removeTask(task.id)} className="delete-button">Delete</button>
      </div>
    </div>
  );
}

// Define PropTypes for ToDoItem component
ToDoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default ToDoItem;
