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
        },
      ];
    },
    taskDelete(state, action) {
      return [...state].filter((task) => task.id !== action.payload.id);
    },
    updateTaskList(state, action) {
      return [...state].map((task) => {
        if (task.id === action.payload.id) {
          return {
            id: action.payload.id,
            title: action.payload.title,
            date: action.payload.date,
            description: action.payload.description,
          };
        }
        return task;
      });
    },
  },
});

export const { taskAdd, taskDelete, updateTaskList } = tasksListSlice.actions;
export default tasksListSlice.reducer;
