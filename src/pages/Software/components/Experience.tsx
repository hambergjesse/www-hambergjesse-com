import { motion } from "framer-motion";
import { useState } from "react";

type ExperienceItem = {
  title: string;
  company: string;
  summary: string;
  duration: string;
  title_color: string;
};

const Experience_Item = ({
  title,
  company,
  summary,
  duration,
  title_color,
}: ExperienceItem) => {
  const [showSummary, setShowSummary] = useState(false);

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  const firstSentence = summary.split(".")[0];
  const remainingSentences = summary.slice(firstSentence.length).trim();

  // adjust the length of the remaining sentences based on the length of the first sentence
  const maxRemainingSentencesLength = 500 - firstSentence.length;
  const truncatedRemainingSentences =
    remainingSentences.length > maxRemainingSentencesLength
      ? `${remainingSentences.slice(0, maxRemainingSentencesLength)}...`
      : remainingSentences;

  const displaySummary = showSummary
    ? `${firstSentence}${truncatedRemainingSentences}`
    : `${summary.slice(0, 150)}...`;

  return (
    <div className="softwarePage__experience--list-item">
      <p style={{ color: "#ecedf3", fontSize: "20px", lineHeight: "auto" }}>
        <strong style={{ lineHeight: "auto" }}>{company}</strong>
      </p>
      <p
        style={{
          color: `${title_color}`,
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "auto",
        }}
      >
        {title}
      </p>
      <p>{duration}</p>
      <p>{displaySummary}</p>
      {summary.length > 150 && (
        <button onClick={toggleSummary}>
          {showSummary ? "Hide Summary" : "Show More"}
        </button>
      )}
    </div>
  );
};

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Junior Full-Stack Developer",
      company: "Virittämö Helsinki",
      summary:
        "Developed projects using React, SCSS, Node, Express, and TypeScript for various clients, utilizing agile development methodologies to ensure on-time and on-budget delivery.",
      duration: "Nov. 2022 — Jul. 2023",
      title_color: "#F5A3C7",
    },
    {
      title: "Full-Stack Intern",
      company: "Digitalents Academy",
      summary:
        "Developed customer-focused and personal Front-End/Full-Stack projects using technologies such as React.js, JavaScript, SCSS/CSS3, HTML5, Node.js, Express.js, MongoDB, and Git. Worked in a Scrum team/Agile environment to ensure project deadlines and goals were met.",
      duration: "Feb. 2022 — Oct. 2022",
      title_color: "#FCF316",
    },
    {
      title: "Graphic Designer",
      company: "ESE Entertainment (TSXV: ESE)",
      summary:
        "Modernized ESE's official social media pages by improving upon existing brand guidelines, resulting in a 50% increase in engagement and a sleeker overall look. Created sponsorship/partnership/event pitch decks for numerous international companies within the gaming and esports scene, resulting in successful partnerships. Bridged the gap between some of the biggest companies in the world and the world of gaming, esports, and content creation through visually-led efforts.",
      duration: "Jul. 2020 — Aug. 2021",
      title_color: "#FFFFFF",
    },
    {
      title: "Junior Designer",
      company: "K1ck Clube de Desportos Electrónicos",
      summary:
        "Redesigned K1CK's entire social media presence, resulting in a 60% increase in engagement and better alignment with the brand identity. Produced daily, eye-catching design content for K1CK's social media platforms, including tournament-, livestream-, and video graphics. Created print-ready design assets for clothing, advertisement boards, and office accessories. Developed branding assets for K1CK's community projects, from concepts to full-fledged products.",
      duration: "Feb. 2020 — Aug. 2021",
      title_color: "#FFCB0C",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="softwarePage__experience"
    >
      <h2>Positions</h2>
      <div className="softwarePage__experience--list">
        {experiences.map((item, index: number) => (
          <Experience_Item
            title={item.title}
            company={item.company}
            summary={item.summary}
            duration={item.duration}
            title_color={item.title_color}
            key={index}
          />
        ))}
      </div>
    </motion.section>
  );
};
