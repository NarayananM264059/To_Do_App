import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types'; 

function ToDoList({ tasks, removeTask, toggleTaskCompletion, updateTask }) {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">Your to-do list is empty!</p>
      ) : (
        tasks.map(task => (
          <ToDoItem 
            key={task.id}
            task={task}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
            updateTask={updateTask}
          />
        ))
      )}
    </div>
  );
}

// Define PropTypes for ToDoList component
ToDoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  removeTask: PropTypes.func.isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
};

export default ToDoList;
