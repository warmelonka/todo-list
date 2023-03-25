import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// function initialState() {
//   const saved = localStorage.getItem('tasksList');
//   const initialValue = JSON.parse(saved);
//   return initialValue || [];
// };

const tasksListSlice = createSlice({
  name: 'tasksList',
  initialState: [],
  reducers: {
    taskAdd(state, action) {
      return [
        ...state,
        {
          id: nanoid(),
          title: action.payload.title,
          date: action.payload.date,
          description: action.payload.description,
          completed: false,
        },
      ];
    },
    taskDelete(state, action) {
      return [...state].filter((task) => task.id !== action.payload.id);
    },
    setTaskStatus(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      const task = state[index];
      task.completed = !action.payload.completed;
    },
  },
});

export const {
  taskAdd,
  taskDelete,
  setTaskStatus,
} = tasksListSlice.actions;
export default tasksListSlice.reducer;
