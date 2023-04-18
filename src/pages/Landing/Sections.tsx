import { Section_Item } from "./Section_Item";
import { SectionInt } from "./Section_Item";

export const Sections = () => {
  const sectionsList: SectionInt[] = [
    { text: "Software" },
    { text: "Design" },
    { text: "Art" },
  ];

  return (
    <>
      {sectionsList.map((item, index: number) => (
        <Section_Item text={item.text} key={index} />
      ))}
    </>
  );
};
