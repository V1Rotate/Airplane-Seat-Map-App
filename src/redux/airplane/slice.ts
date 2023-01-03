import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAirplanes } from './asyncActions';
import { Airplane, AirplaneSliceState, Status } from './types';

const initialState: AirplaneSliceState = {
  items: [],
  status: Status.LOADING,
};

const airplaneSlice = createSlice({
  name: 'airplane',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Airplane[]>) {
      state.items = action.payload;
    },
  },
  // i set the airplane models fetching statuses as the extraReducers cases.
  extraReducers: (builder) => {
    builder.addCase(fetchAirplanes.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchAirplanes.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchAirplanes.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = airplaneSlice.actions;

export default airplaneSlice.reducer;
