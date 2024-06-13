import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '@/modules/store';

export interface DetailNumState {
  value: number;
}

const initialState: DetailNumState = {
  value: 0
};

export const detailNumSlice = createSlice({
  name: 'detailNum',
  initialState,
  reducers: {
    addDetail: (state) => {
      state.value += 1;
    },
    deleteDetail: (state) => {
      state.value -= 1;
    }
  }
});

export const { addDetail, deleteDetail } = detailNumSlice.actions;

export default detailNumSlice.reducer;
export const selectDetailNumValue = (state: RootState) => state.detailNum.value;