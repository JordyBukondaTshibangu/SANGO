import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./features/events/eventSlice";

export const store = () =>
  configureStore({
    reducer: {
      events: eventReducer,
    },
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
