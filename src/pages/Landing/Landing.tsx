import { Background } from "../../components/Background/Background";
import { Background_Image } from "./components/Background_Image";
import { BrandLogo } from "../../components/BrandLogo/BrandLogo";
import { Copyright } from "../../components/Copyright/Copyright";
import { Sections } from "./components/Sections";

const Landing = () => {
  return (
    <main className="landingPage__wrapper">
      <BrandLogo />
      <div className="landingPage__container">
        <Sections />
      </div>
      <Copyright />
      <Background />
      <Background_Image img={"src/pages/Landing/assets/background-img.webp"} />
    </main>
  );
};

export default Landing;
