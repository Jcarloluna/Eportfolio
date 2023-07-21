import Head from "next/head";
import { Hero } from "../components/Hero";
import React from "react";
import { About } from "../components/About";
import { Skills } from "../components/SkillsTech/Skills";
import Projects from "../components/Projects";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { SlideUp } from "../components/SlideUp";

const Home = () => {
  return (
    <div>
      <Head>
        <title>JCLuna</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/assets/jcLogoHead.svg" />
      </Head>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      <SlideUp />
    </div>
  );
};

export default Home;
