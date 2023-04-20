import { Background } from "../../components/Background/Background";
import { BrandLogo } from "../../components/BrandLogo/BrandLogo";
import { Copyright } from "../../components/Copyright/Copyright";

import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Socials } from "../../components/Socials/Socials";

const Software = () => {
  return (
    <main className="softwarePage__wrapper">
      <BrandLogo />
      <div className="softwarePage__container">
        <Projects />
        <Experience />
        <Socials />
      </div>
      <Copyright />
      <Background />
    </main>
  );
};

export default Software;
