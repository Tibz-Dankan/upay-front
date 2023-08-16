import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlert: false,
  alertType: null,
  alertMessage: null,
  showCardNotification: false,
  cardNotificationType: null,
  cardMessage: null,
  cardNotificationTitle: null,
};
export const notificationSlice = createSlice({
  name: "notification",
  initialState: initialState,
  reducers: {
    showAlert(state, action) {
      state.showAlert = true;
      state.alertType = action.payload.type;
      state.alertMessage = action.payload.message;
    },
    hideAlert(state, _) {
      state.showAlert = false;
      state.alertType = null;
      state.alertMessage = null;
    },
    showCardNotification(state, action) {
      state.showCardNotification = true;
      state.cardNotificationType = action.payload.type;
      state.cardMessage = action.payload.message;
      state.cardNotificationTitle = action.payload.title;
    },
    hideCardNotification(state, _) {
      state.showCardNotification = false;
      state.cardNotificationType = null;
      state.cardMessage = null;
    },
  },
});
