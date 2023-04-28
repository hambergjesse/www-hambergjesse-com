import { Background } from "../../components/Background/Background";
import { BrandLogo } from "../../components/BrandLogo/BrandLogo";
import { Navigation } from "../../components/Navigation/Navigation";
import { Copyright } from "../../components/Copyright/Copyright";

import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Technologies } from "./components/Technologies";
import { Socials } from "../../components/Socials/Socials";

const Software = () => {
  return (
    <main className="softwarePage__wrapper">
      <BrandLogo />
      <Navigation />
      <div className="softwarePage__container">
        <section className="softwarePage__introduction">
          <h1>Software</h1>
          <p>
            Welcome to my software development portfolio, where I showcase my
            passion for developing intuitive and user-friendly applications
            using a variety of technologies. As a junior full-stack developer, I
            have hands-on experience in React, SCSS, Node, Express, and
            TypeScript, and have utilized agile development methodologies to
            deliver projects on-time and within budget. My portfolio features
            several projects developed for various clients, each tailored to
            their unique needs and requirements.
          </p>
        </section>
        <Projects />
        <Experience />
        <Technologies />
        <Socials />
      </div>
      <Copyright />
      <Background />
    </main>
  );
};

export default Software;
