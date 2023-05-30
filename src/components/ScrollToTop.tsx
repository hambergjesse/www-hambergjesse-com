import { SlArrowUpCircle } from "react-icons/sl";
import { useEffect, useState } from "react";
import { motion, Transition, Variants } from "framer-motion";

export const ScrollToTop = () => {
  const [showArrow, setShowArrow] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      if (scrollY > innerHeight / 2) {
        setShowArrow(true);
        console.log("At Half the screen");
      } else {
        setShowArrow(false);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 720);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const arrowStyle: React.CSSProperties = {
    background: "#292933",
    borderRadius: "50%",
    position: "fixed",
    cursor: "pointer",
    color: "white",
    zIndex: 1,
    height: "35px",
    width: "35px",
    bottom: "75px",
    right: "75px",
    ...(isSmallScreen && { left: "50%", transform: "translateX(-50%)" }),
  };

  const arrowAnimation: Variants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  };

  const transition: Transition = {
    ease: "easeInOut",
    duration: 1,
  };

  return showArrow ? (
    <motion.button
      className="scrollToTop__wrapper"
      style={arrowStyle}
      onClick={handleClick}
      initial="initial"
      animate="whileInView"
      variants={arrowAnimation}
      transition={transition}
    >
      <SlArrowUpCircle style={{ width: "100%", height: "100%" }} />
    </motion.button>
  ) : null;
};
