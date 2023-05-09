import { motion } from "framer-motion";

import { Background } from "../../components/Background/Background";
import { Background_Image } from "./components/Background_Image";
import { BrandLogo } from "../../components/BrandLogo/BrandLogo";
import { Copyright } from "../../components/Copyright/Copyright";
import { Sections } from "./components/Sections";

const Landing = () => {
  return (
    <main className="landingPage__wrapper">
      <BrandLogo />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="landingPage__container"
      >
        <Sections />
      </motion.div>
      <Copyright />
      <Background />
      <Background_Image img={"/assets/Landing/background-img.webp"} />
    </main>
  );
};

export default Landing;
