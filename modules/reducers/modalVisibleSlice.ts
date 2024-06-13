import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ModalVisibleState {
  modalVisible: boolean;
}

const initialState: ModalVisibleState = {
  modalVisible: false
};

export const modalVisibleSlice = createSlice({
  name: 'modalVisible',
  initialState,
  reducers: {
    changeVisible: (state) => {
      state.modalVisible = !state.modalVisible;
    }
  }
});

export const { changeVisible } = modalVisibleSlice.actions;

export default modalVisibleSlice.reducer;
export const selectVisibleValue = (state: RootState) => state.modalVisible;