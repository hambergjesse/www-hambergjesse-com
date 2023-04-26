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
    { icon: <SiTypescript />, link: "https://www.typescriptlang.org/" },
    { icon: <SiJavascript />, link: "https://www.javascript.com/" },
    { icon: <SiReact />, link: "https://react.dev/" },
    {
      icon: <SiHtml5 />,
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    },
    {
      icon: <SiCss3 />,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    { icon: <SiSass />, link: "https://sass-lang.com/" },
    { icon: <SiNodedotjs />, link: "https://nodejs.org/en" },
    { icon: <SiExpress />, link: "https://expressjs.com/" },
    { icon: <SiMongodb />, link: "https://www.mongodb.com/" },
    { icon: <SiGithub />, link: "https://github.com/" },
    { icon: <SiGoogle />, link: "https://google.com/" },
    { icon: <SiJest />, link: "https://jestjs.io/" },
    { icon: <SiEslint />, link: "https://eslint.org/" },
    { icon: <SiAdobe />, link: "https://www.adobe.com/" },
    { icon: <SiFigma />, link: "https://www.figma.com/" },
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
