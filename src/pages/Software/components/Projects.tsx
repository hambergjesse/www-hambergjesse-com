type ProjectItem = {
  name: string;
  description: string;
  image: string;
  link: string;
};

const Project = ({ name, description, image, link }: ProjectItem) => {
  const slicedDescription: string =
    description.length < 50 ? description.slice(0, 50) + "..." : description;

  return (
    <div className="softwarePage__projects--list-item">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt="" />
      </a>
      <p style={{ color: "#ecedf3", fontSize: "20px", lineHeight: "24px" }}>
        <strong style={{ lineHeight: "24px" }}>{name}</strong>
      </p>
      <p>{slicedDescription}</p>
    </div>
  );
};

export const Projects = () => {
  const projects: ProjectItem[] = [
    {
      name: "Virittämö Website",
      description: "The renewed website for Virittämö Helsinki - 2023 edition.",
      image: "src/pages/Software/components/assets/projects/virittamo.webp",
      link: "https://github.com/hambergjesse/virittamo-website",
    },
    {
      name: "OnlyWeights",
      description:
        "Gym companion app designed to make workout routines easier and more efficient.",
      image: "src/pages/Software/components/assets/projects/onlyweights.webp",
      link: "https://github.com/hambergjesse/only-weights-app",
    },
    {
      name: "Saukko App",
      description:
        "A degree completion service for employed students - requested by StadinAO / City of Helsinki.",
      image: "src/pages/Software/components/assets/projects/saukko.webp",
      link: "https://stadinao.fi/",
    },
  ];

  return (
    <section className="softwarePage__projects">
      <h2>Projects</h2>
      <div className="softwarePage__projects--list">
        {projects.map((item, index: number) => (
          <Project
            name={item.name}
            description={item.description}
            image={item.image}
            link={item.link}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
