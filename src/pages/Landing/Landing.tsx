import { Background } from "../../components/Background/Background";
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
    </main>
  );
};

export default Landing;
