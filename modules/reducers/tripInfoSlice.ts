import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface TripInfoState {
  title: string;
  location: string;
  days: {
    start: string,
    end: string,
  };
}

const initialState: TripInfoState = {
  title: '',
  location: '',
  days: {
    start: '',
    end: ''
  },
};

export const tripInfoSlice = createSlice({
  name: 'tripInfo',
  initialState,
  reducers: {
    setTripTitle: (state, action) => {
      state.title = action.payload;
    },
    setTripLocation: (state, action) => {
      state.location = action.payload;
    },
    setTripDays: (state, action) => {
      const day = action.payload.day;
      const isStart = action.payload.isStart;

      isStart ? state.days.start = day : state.days.end = day;
    },
  }
});

export const { setTripTitle, setTripLocation, setTripDays } = tripInfoSlice.actions;

export default tripInfoSlice.reducer;
export const selectTripValue = (state: RootState) => state.tripInfo;