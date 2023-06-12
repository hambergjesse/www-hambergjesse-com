import { motion } from "framer-motion";
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
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="brand-logo"
      style={imgStyle}
      src="/assets/logo.webp"
      alt="Jesse Hamberg's logo"
      onClick={() => navigate("/")}
      loading="lazy"
    />
  );
};
