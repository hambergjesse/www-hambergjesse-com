export const BrandLogo = () => {
  type Style = {
    [key: string]: string;
  };

  const imgStyle: Style = {
    position: "absolute",
    width: "25px",
    top: "37.5px",
  };

  return (
    <img
      style={imgStyle}
      src="src\components\BrandLogo\assets\logo.webp"
      alt="Jesse Hamberg's logo"
    />
  );
};
