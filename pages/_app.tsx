import React from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Component, Fragment } from "react";

function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
