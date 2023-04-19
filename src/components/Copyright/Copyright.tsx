export const Copyright = () => {
  const currYear = new Date().getFullYear();

  type Style = {
    [key: string]: string;
  };

  const sectStyle: Style = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: "50px",
    gap: "6px",
  };

  const aStyle: Style = {
    fontSize: "14px",
    color: "#ecedf3",
  };

  const pStyle: Style = {
    fontSize: "12px",
    color: "#96979b",
  };

  return (
    <section className="copyright__container" style={sectStyle}>
      <a href="mailto:contact@hambergjesse.com" style={aStyle}>
        contact@hambergjesse.com
      </a>
      <p style={pStyle}>© {currYear} Jesse Hamberg. All rights reserved.</p>
    </section>
  );
};
