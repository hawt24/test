import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, completeTask, deleteTask } from '../actions';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const taskName = prompt('Enter task name:');
    if (taskName) {
      dispatch(addTask(taskName));
    }
  };

  const handleCompleteTask = taskId => {
    dispatch(completeTask(taskId));
  };

  const handleDeleteTask = taskId => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h1>Task List</h1>
      <button  onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
          >
            {task.name}
            {!task.completed && (
              <>
                <button onClick={() => handleCompleteTask(task.id)}>
                  Complete
                </button>
                <button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
