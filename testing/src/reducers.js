import { combineReducers } from 'redux';
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from './actions';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case COMPLETE_TASK:
      return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: true }
          : task
      );
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
