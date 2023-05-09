import { motion } from "framer-motion";
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { BsBehance, BsLinkedin } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";

type SocialProps = {
  link: string;
  component: React.ReactNode;
};

const Social = ({ link, component }: SocialProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{
        height: "auto",
        width: "100%",
      }}
    >
      {component}
    </a>
  );
};

export const Socials = () => {
  type Style = {
    [key: string]: string;
  };

  const containerStyle: Style = {
    display: "flex",
    width: "125px",
    height: "25px",
    gap: "12.5px",
    msTransform: "translateY(-50%)",
    transform: "translateY(-50%)",
  };

  const svgStyle: Style = {
    height: "100%",
    width: "100%",
    color: "#ecedf3",
  };

  const socials: SocialProps[] = [
    {
      link: "https://www.linkedin.com/in/hambergjesse/",
      component: <BsLinkedin style={svgStyle} />,
    },
    {
      link: "https://www.behance.net/hambergjesse",
      component: <BsBehance style={svgStyle} />,
    },
    {
      link: "https://github.com/hambergjesse",
      component: <VscGithubInverted style={svgStyle} />,
    },
    {
      link: "mailto:contact@hambergjesse.com",
      component: <MdMailOutline style={svgStyle} />,
    },
    {
      link: "https://twitter.com/hambjes",
      component: <VscTwitter style={svgStyle} />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="socials__container"
      style={containerStyle}
    >
      {socials.map((item, index: number) => (
        <Social link={item.link} component={item.component} key={index} />
      ))}
    </motion.div>
  );
};
