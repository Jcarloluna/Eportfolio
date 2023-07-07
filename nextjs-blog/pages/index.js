import Head from "next/head";
import Hero from "../components/Hero.jsx"

const Home = () => {
  return (
    <div>
      <Head>
        <title>JCL | EPortfolio</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Hero/>
    </div>
  );
};

export default Home;
