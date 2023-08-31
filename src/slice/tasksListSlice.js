import { createSlice } from '@reduxjs/toolkit';

const tasksListSlice = createSlice({
  name: 'tasksList',
  initialState: [],
  reducers: {
    fetchTodos(state, action) {
      return [...action.payload];
    },

    setTaskStatus(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      const task = state[index];
      task.completed = !action.payload.completed;
    },
  },
});

export const {
  fetchTodos,
  setTaskStatus,
} = tasksListSlice.actions;

export default tasksListSlice.reducer;
