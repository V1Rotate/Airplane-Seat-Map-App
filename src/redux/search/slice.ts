import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchSliceState } from './types';

// Initial value of the search input which is empty string and then user is allowed to type an airplane model he is looking for.

const initialState: SearchSliceState = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'airplanes search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
