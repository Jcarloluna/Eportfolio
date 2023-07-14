import React from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Component, Fragment } from "react";
import '@fontsource/indie-flower';
import '@fontsource/caveat-brush';
import Footer from "../components/Footer";


function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
     
    </div>
  );
}

export default MyApp;
