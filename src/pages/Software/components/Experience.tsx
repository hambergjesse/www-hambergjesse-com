type ExperienceItem = {
  title: string;
  company: string;
  summary: string;
  duration: string;
};

const Experience_Item = ({
  title,
  company,
  summary,
  duration,
}: ExperienceItem) => {
  return (
    <div className="softwarePage__experience--list-item">
      <p style={{ color: "#ecedf3", fontSize: "20px", lineHeight: "auto" }}>
        <strong style={{ lineHeight: "auto" }}>{company}</strong>
      </p>
      <p style={{ fontSize: "18px", fontWeight: "bold", lineHeight: "auto" }}>
        {title}
      </p>
      <p>{duration}</p>
      <p>{summary}</p>
    </div>
  );
};

export const Experience = () => {
  const experiences = [
    {
      title: "Junior Full-Stack Developer",
      company: "Virittämö Helsinki",
      summary:
        "Developed projects using React, SCSS, Node, Express, and TypeScript for various clients, utilizing agile development methodologies to ensure on-time and on-budget delivery.",
      duration: "Nov. 2022 — Present",
    },
    {
      title: "Full-Stack Intern",
      company: "Digitalents Academy",
      summary:
        "Developed customer-focused and personal Front-End/Full-Stack projects using technologies such as React.js, JavaScript, SCSS/CSS3, HTML5, Node.js, Express.js, MongoDB, and Git. Worked in a Scrum team/Agile environment to ensure project deadlines and goals were met.",
      duration: "Feb. 2022 — Oct. 2022",
    },
    {
      title: "Graphic Designer",
      company: "ESE Entertainment (TSXV: ESE)",
      summary:
        "Modernized ESE's official social media pages by improving upon existing brand guidelines, resulting in a 50% increase in engagement and a sleeker overall look. Created sponsorship/partnership/event pitch decks for numerous international companies within the gaming and esports scene, resulting in successful partnerships. Bridged the gap between some of the biggest companies in the world and the world of gaming, esports, and content creation through visually-led efforts.",
      duration: "Jul. 2020 — Aug. 2021",
    },
    {
      title: "Junior Designer",
      company: "K1ck Clube de Desportos Electrónicos",
      summary:
        "Redesigned K1CK's entire social media presence, resulting in a 60% increase in engagement and better alignment with the brand identity. Produced daily, eye-catching design content for K1CK's social media platforms, including tournament-, livestream-, and video graphics. Created print-ready design assets for clothing, advertisement boards, and office accessories. Developed branding assets for K1CK's community projects, from concepts to full-fledged products.",
      duration: "Feb. 2020 — Aug. 2021",
    },
  ];
  return (
    <section className="softwarePage__experience">
      <h2>Experience</h2>
      <div className="softwarePage__experience--list">
        {experiences.map((item, index: number) => (
          <Experience_Item
            title={item.title}
            company={item.company}
            summary={item.summary}
            duration={item.duration}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
