import { createSlice } from '@reduxjs/toolkit';

export const rootSlice = createSlice({
  name: 'root',
  initialState: {
    make: '',
    model: '',
    year: ''
  },
  reducers: {
    chooseMake: (state, action) => { state.make = action.payload },
    chooseModel: (state, action) => { state.model = action.payload },
    chooseYear: (state, action) => { state.year = action.payload },
  }
});

export const { chooseMake, chooseModel, chooseYear } = rootSlice.actions;
export default rootSlice.reducer;
