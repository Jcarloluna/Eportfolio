import Head from "next/head";
import Hero from "../components/Hero";
import React from "react";
import About from "../components/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contacts/Contact";
import Message from "../components/Message";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div>
      <Head>
        <title>JCLuna</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link
          rel="icon"
          href="/assets/jcLogoHead.svg"
         
        />
      </Head>
      <Hero />
      {/* <About />
      <Experience /> */}
      <Skills />
      <Projects />
      <Contact />
      <Message/>
    </div>
  );
};

export default Home;
