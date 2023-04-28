import { Section_Item } from "./Section_Item";
import { SectionInt } from "./Section_Item";

export const Sections = () => {
  const sectionsList: SectionInt[] = [
    { text: "About me", path: "/" },
    { text: "Software", path: "/software" },
    { text: "Design", path: "/design" },
    { text: "Art", path: "/art" },
  ];

  return (
    <>
      {sectionsList.map((item, index: number) => (
        <Section_Item text={item.text} path={item.path} key={index} />
      ))}
    </>
  );
};
