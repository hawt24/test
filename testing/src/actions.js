export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = name => ({
  type: ADD_TASK,
  payload: {
    id: Date.now(),
    name,
    completed: false,
  },
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  payload: id,
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id,
});
