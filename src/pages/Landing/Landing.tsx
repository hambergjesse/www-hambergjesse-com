import { BrandLogo } from "../../components/BrandLogo/BrandLogo";
import { Copyright } from "../../components/Copyright/Copyright";
import { SectionInt } from "./Section";
import { Section } from "./Section";

const Landing = () => {
  const sectionsList: SectionInt[] = [
    { text: "Software" },
    { text: "Design" },
    { text: "Art" },
  ];

  return (
    <main className="landingPage__wrapper">
      <BrandLogo />
      <div className="landingPage__container">
        {sectionsList.map((item, index: number) => (
          <Section text={item.text} key={index} />
        ))}
      </div>
      <Copyright />
    </main>
  );
};

export default Landing;
