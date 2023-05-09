import { motion } from "framer-motion";

export const Background = () => {
  type Style = {
    [key: string]: string;
  };

  const backgroundStyle: Style = {
    background: "#292933",
    position: "absolute",
    height: "100%",
    opacity: "50%",
    width: "50%",
    zIndex: "-1",
    right: "0",
    top: "0",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 0.75 }}
      className="background__wrapper"
      style={backgroundStyle}
    ></motion.div>
  );
};
