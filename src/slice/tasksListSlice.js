import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksListSlice = createSlice({
  name: 'tasksList',
  initialState: [],
  reducers: {
    taskAdd(state, action) {
      return [
        ...state,
        {
          id: nanoid(),
          completed: false,
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
            completed: action.payload.completed,
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
