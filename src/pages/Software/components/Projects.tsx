type ProjectItem = {
  name: string;
  description: string;
  image: string;
  link: string;
  borderColor: string;
};

const Project = ({
  name,
  description,
  image,
  link,
  borderColor,
}: ProjectItem) => {
  const slicedDescription: string =
    description.length < 50 ? description.slice(0, 50) + "..." : description;

  return (
    <div
      className="softwarePage__projects--list-item"
      style={{ border: `1px solid ${borderColor}` }}
    >
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
      name: "OnlyWeights",
      description:
        "Gym companion app designed to make workout routines easier and more efficient.",
      image: "src/pages/Software/components/assets/projects/onlyweights.webp",
      link: "https://github.com/hambergjesse/only-weights-app",
      borderColor: "#FBA701",
    },
    {
      name: "Saukko App",
      description:
        "A degree completion service for employed students - requested by StadinAO / City of Helsinki.",
      image: "src/pages/Software/components/assets/projects/saukko.webp",
      link: "https://stadinao.fi/",
      borderColor: "#9FC9EB",
    },
    {
      name: "Virittämö Website",
      description: "The renewed website for Virittämö Helsinki - 2023 edition.",
      image: "src/pages/Software/components/assets/projects/virittamo.webp",
      link: "https://github.com/hambergjesse/virittamo-website",
      borderColor: "#F5A3C7",
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
            borderColor={item.borderColor}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
