import { configureStore } from "@reduxjs/toolkit";
import tripInfoReducer from "./reducers/tripInfoSlice";
import detailNumReducer from "./reducers/detailNumSlice";
import modalVisibleReducer from "./reducers/modalVisibleSlice";

export const store = configureStore({
  reducer: {
    tripInfo: tripInfoReducer,
    detailNum: detailNumReducer,
    modalVisible: modalVisibleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
