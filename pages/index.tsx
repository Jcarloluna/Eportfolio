import Head from "next/head";
import { Hero } from "../components/Hero";
import React, { Suspense } from "react";
import { About } from "../components/About";
import { Skills } from "../components/SkillsTech/Skills";
import Projects from "../components/Projects/Projects";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Head>
        <title>JCLuna</title>
        <meta
          name="Jhon Carlo Luna | Developer Portfolio"
          content="I'm an aspiring web developer specializing in front-end development while exploring backend technologies"
        />
        <link rel="icon" href="/assets/jcLogoHead.svg" />
      </Head>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
