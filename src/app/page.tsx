import React, { type FC } from "react";

import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import TechStack from "./components/techStack/TechStackGrid";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
    </div>
  );
};

export default Home;
