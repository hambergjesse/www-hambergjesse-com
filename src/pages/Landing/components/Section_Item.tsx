import { useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

export type SectionInt = {
  text: string;
  path: string;
};

export const Section_Item = ({ text, path }: SectionInt) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

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
    // textDecoration: hover ? "underline" : "none",
    color: hover ? "#ecedf3" : "transparent",
    WebkitTextStroke: hover ? "transparent" : "1px #96979b",
    transition: "ease-in-out 0.15s",
    lineHeight: hover ? `calc(${fontSize} + 5px)` : fontSize,
    cursor: "pointer",
    fontSize: hover ? `calc(${fontSize} + 5px)` : fontSize,
  };

  useLayoutEffect(() => {
    const handleResize = () => {
      if (
        window.matchMedia("(min-width: 320px) and (max-width: 374px)").matches
      ) {
        setFontSize("36px");
      } else if (
        window.matchMedia("(min-width: 375px) and (max-width: 424px)").matches
      ) {
        setFontSize("46px");
      } else if (
        window.matchMedia("(min-width: 425px) and (max-width: 767px)").matches
      ) {
        setFontSize("52px");
      } else if (
        window.matchMedia("(min-width: 768px) and (max-width: 1079px)").matches
      ) {
        setFontSize("102px");
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
      onClick={() => navigate(path)}
    >
      <h1 style={headingStyle}>{text}</h1>
      <div className="landingPage__section--circle"></div>
    </section>
  );
};
