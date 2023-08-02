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
import { DarkModeButton } from "../components/DarkMode";

const Home = () => {
  return (
    <div className="dark:bg-[#1c1c1c] dark:text-white duration-300 ease-in-out">
      <Navbar />
      <Head>
        <title>JCL</title>
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
      <DarkModeButton />
    </div>
  );
};

export default Home;
