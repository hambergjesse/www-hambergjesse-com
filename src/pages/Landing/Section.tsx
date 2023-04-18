import { Background } from "../../components/Background/Background";
import { useState } from "react";

export type SectionInt = {
  text: string;
};

export const Section = ({ text }: SectionInt) => {
  type Style = {
    [key: string]: string;
  };

  const sectionStyle: Style = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    textAlign: "center",
    width: "auto",
  };

  const [hover, setHover] = useState(false);

  const headingStyle: Style = {
    transition: "ease-in-out 0.15s",
    lineHeight: "42px",
    fontSize: "42px",
    color: hover ? "#ecedf3" : "#96979b",
    textDecoration: hover ? "underline" : "none",
    cursor: "pointer",
  };

  return (
    <section
      className="landingPage__section"
      style={sectionStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1 style={headingStyle}>{text}</h1>
      <div className="landingPage__section--circle"></div>
      <Background />
    </section>
  );
};
