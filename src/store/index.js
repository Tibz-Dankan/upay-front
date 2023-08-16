import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth";
import { notificationSlice } from "./reducers/notification";
import { sidebarSlice } from "./reducers/sidebar";
import { chatSlice } from "./reducers/chat";
import { roomSlice } from "./reducers/room";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    notification: notificationSlice.reducer,
    sidebar: sidebarSlice.reducer,
    chat: chatSlice.reducer,
    room: roomSlice.reducer,
  },
});

let url, socketUrl;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  url = "http://localhost:5000/v1/api";
} else {
  url = "production_url/v1/api";
}

export { url, socketUrl };
export const authActions = authSlice.actions;
export const notificationActions = notificationSlice.actions;
export const sidebarActions = sidebarSlice.actions;
export const chatActions = chatSlice.actions;
export const roomActions = roomSlice.actions;
