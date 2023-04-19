import { useNavigate } from "react-router-dom";

export const BrandLogo = () => {
  type Style = {
    [key: string]: string;
  };

  const imgStyle: Style = {
    cursor: "pointer",
    position: "absolute",
    width: "25px",
    top: "50px",
    zIndex: "1",
  };

  const navigate = useNavigate();

  return (
    <img
      style={imgStyle}
      src="src\components\BrandLogo\assets\logo.webp"
      alt="Jesse Hamberg's logo"
      onClick={() => navigate("/")}
    />
  );
};
