import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  date: '',
  description: '',
};

const taskNewSlice = createSlice({
  name: 'newTaskForm',
  initialState,
  reducers: {
    updateValue(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearForm() {
      return initialState;
    },
  },
});

export const { updateValue, clearForm } = taskNewSlice.actions;
export default taskNewSlice.reducer;
