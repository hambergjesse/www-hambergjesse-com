import { ReactNode } from "react";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiGoogle,
  SiJest,
  SiEslint,
  SiAdobe,
  SiFigma,
} from "react-icons/si";

type TechItem = {
  children: ReactNode;
  link: string;
};

const Tech_Item = ({ children, link }: TechItem) => {
  return (
    <li className="softwarePage__technologies--list-item">
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  );
};

export const Technologies = () => {
  type TechList = {
    icon: ReactNode;
    link: string;
  };

  const tech_list: TechList[] = [
    {
      icon: <SiTypescript style={{ fill: "#3178C6" }} />,
      link: "https://www.typescriptlang.org/",
    },
    {
      icon: <SiJavascript style={{ fill: "#FCDC00" }} />,
      link: "https://www.javascript.com/",
    },
    {
      icon: <SiReact style={{ fill: "#149ECA" }} />,
      link: "https://react.dev/",
    },
    {
      icon: <SiHtml5 style={{ fill: "#E36028" }} />,
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    },
    {
      icon: <SiCss3 style={{ fill: "#3963E9" }} />,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <SiSass style={{ fill: "#CF649A" }} />,
      link: "https://sass-lang.com/",
    },
    {
      icon: <SiNodedotjs style={{ fill: "#89BB3C" }} />,
      link: "https://nodejs.org/en",
    },
    {
      icon: <SiExpress style={{ fill: "#FFFFFF" }} />,
      link: "https://expressjs.com/",
    },
    {
      icon: <SiMongodb style={{ fill: "#0FA14C" }} />,
      link: "https://www.mongodb.com/",
    },
    {
      icon: <SiGithub style={{ fill: "#FFFFFF" }} />,
      link: "https://github.com/",
    },
    {
      icon: <SiGoogle style={{ fill: "#3F7EE8" }} />,
      link: "https://google.com/",
    },
    {
      icon: <SiJest style={{ fill: "#853957" }} />,
      link: "https://jestjs.io/",
    },
    {
      icon: <SiEslint style={{ fill: "#472FB9" }} />,
      link: "https://eslint.org/",
    },
    {
      icon: <SiAdobe style={{ fill: "#FA0400" }} />,
      link: "https://www.adobe.com/",
    },
    {
      icon: <SiFigma style={{ fill: "#04D082" }} />,
      link: "https://www.figma.com/",
    },
  ];

  return (
    <section className="softwarePage__technologies">
      <h2>Tech Skills</h2>
      <ul className="softwarePage__technologies--list">
        {tech_list.map((item, index: number) => (
          <Tech_Item key={index} link={item.link}>
            {item.icon}
          </Tech_Item>
        ))}
      </ul>
    </section>
  );
};
