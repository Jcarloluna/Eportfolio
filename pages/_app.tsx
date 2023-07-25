import React from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "@fontsource/indie-flower";
import "@fontsource/caveat-brush";
import store from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
