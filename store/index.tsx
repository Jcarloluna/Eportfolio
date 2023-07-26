import { createSlice, configureStore } from "@reduxjs/toolkit";
import { IDarkMode, IMessageModal, INavbar } from "./interfaces";

const initialContactState: IMessageModal = {
  isMessageLoading: false,
  showMessageBox: false,
  messageResponseStatus: "",
};

const messageModalSlice = createSlice({
  name: "messageModal",
  initialState: initialContactState,
  reducers: {
    toggleMessageLoading(state, action) {
      state.isMessageLoading = action.payload;
    },
    toggleMessageBox(state, action) {
      state.showMessageBox = action.payload;
    },
    setResponseStatus(state, action) {
      state.messageResponseStatus = action.payload;
    },
  },
});

const initialNavbarState: INavbar = {
  navBurger: false,
  navShadow: false,
};

const navbarSlice = createSlice({
  name: "navBar",
  initialState: initialNavbarState,
  reducers: {
    toggleNavBurger(state) {
      state.navBurger = !state.navBurger;
    },
    toggleNavShadow(state, action) {
      state.navShadow = action.payload;
    },
  },
});


const initialDarkModeState: IDarkMode = {
  darkModeState: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: initialDarkModeState,
  reducers: {
    toggleDarkMode(state) {
      state.darkModeState = !state.darkModeState;
    },
  },
});

const store = configureStore({
  reducer: {
    messageModal: messageModalSlice.reducer,
    navBar: navbarSlice.reducer,
    darkMode: darkModeSlice.reducer,
  },
});

export const messageModalActions = messageModalSlice.actions;
export const navbarActions = navbarSlice.actions;
export const darkModeActions = darkModeSlice.actions;
export default store;
