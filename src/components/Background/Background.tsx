export const Background = () => {
  type Style = {
    [key: string]: string;
  };

  const backgroundStyle: Style = {
    background: "#292933",
    position: "absolute",
    height: "100%",
    opacity: "35%",
    width: "50%",
    zIndex: "-1",
    right: "0",
  };

  return <div className="background__wrapper" style={backgroundStyle}></div>;
};
