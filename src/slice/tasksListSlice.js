import { createSlice } from '@reduxjs/toolkit';

const tasksListSlice = createSlice({
  name: 'tasksList',
  initialState: [],
  reducers: {
    fetchTodos(state, action) {
      return [...action.payload];
    },

    taskAdd(state, action) {
      state.push({
        ...action.payload,
      });
    },

    taskDelete(state, action) {
      return state.filter((task) => task.id !== action.payload.id);
    },

    setTaskStatus(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      const task = state[index];
      task.completed = !action.payload.completed;
    },

    saveTask(state, action) {
      return state.map((task) => (task.id === action.payload.id ? {
        ...task,
        ...action.payload,
      } : task));
    },
  },
});

export const {
  fetchTodos,
  taskAdd,
  taskDelete,
  setTaskStatus,
  saveTask,
} = tasksListSlice.actions;

export default tasksListSlice.reducer;
