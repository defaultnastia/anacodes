import React, { type FC } from "react";

import About from "./components/about";
import Hero from "./components/hero";
import TechStack from "./components/techStack";

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
