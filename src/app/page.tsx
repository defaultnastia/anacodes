import React, { type FC } from "react";

import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
