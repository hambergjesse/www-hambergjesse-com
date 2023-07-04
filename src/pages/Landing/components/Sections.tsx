import { Section_Item } from "./Section_Item";
import { SectionInt } from "./Section_Item";

export const Sections = () => {
  const sectionsList: SectionInt[] = [
    { text: "Experience", path: "/experience" },
    { text: "Portfolio", path: "/portfolio" },
    { text: "Gallery", path: "/gallery" },
  ];

  return (
    <>
      {sectionsList.map((item, index: number) => (
        <Section_Item text={item.text} path={item.path} key={index} />
      ))}
    </>
  );
};
