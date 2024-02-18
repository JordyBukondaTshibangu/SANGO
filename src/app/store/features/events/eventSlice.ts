import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { EventT } from "@/components/events/container/EventList";

interface EventState {
  events: EventT[];
}

const initialState: EventState = {
  events: [],
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<EventT[]>) => {
      state.events = action.payload;
    },
  },
});

export const { setEvents } = eventsSlice.actions;

export const selectEvents = (state: RootState) => state.events.events;

export default eventsSlice.reducer;
