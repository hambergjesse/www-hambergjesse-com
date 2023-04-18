import { useState, useLayoutEffect } from "react";

export type SectionInt = {
  text: string;
};

export const Section_Item = ({ text }: SectionInt) => {
  const [hover, setHover] = useState(false);
  const [fontSize, setFontSize] = useState("42px");

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

  const headingStyle: Style = {
    textDecoration: hover ? "underline" : "none",
    color: hover ? "#ecedf3" : "#96979b",
    transition: "ease-in-out 0.15s",
    lineHeight: fontSize,
    cursor: "pointer",
    fontSize: fontSize,
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      if (
        window.matchMedia("(min-width: 320px) and (max-width: 374px)").matches
      ) {
        setFontSize("52px");
      } else if (
        window.matchMedia("(min-width: 375px) and (max-width: 424px)").matches
      ) {
        setFontSize("62px");
      } else if (
        window.matchMedia("(min-width: 425px) and (max-width: 767px)").matches
      ) {
        setFontSize("72px");
      } else if (
        window.matchMedia("(min-width: 768px) and (max-width: 1079px)").matches
      ) {
        setFontSize("122px");
      } else if (
        window.matchMedia("(min-width: 1080px) and (max-width: 1279px)").matches
      ) {
        setFontSize("132px");
      } else if (
        window.matchMedia("(min-width: 1280px) and (max-width: 1439px)").matches
      ) {
        setFontSize("142px");
      } else if (
        window.matchMedia("(min-width: 1440px) and (max-width: 1599px)").matches
      ) {
        setFontSize("152px");
      } else if (
        window.matchMedia("(min-width: 1600px) and (max-width: 1919px)").matches
      ) {
        setFontSize("162px");
      } else if (window.matchMedia("(min-width: 1920px)").matches) {
        setFontSize("172px");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="landingPage__section"
      style={sectionStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1 style={headingStyle}>{text}</h1>
      <div className="landingPage__section--circle"></div>
    </section>
  );
};
