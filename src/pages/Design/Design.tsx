import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Background } from "../../components/Background/Background";
import { BrandLogo } from "../../components/BrandLogo/BrandLogo";
import { Navigation } from "../../components/Navigation/Navigation";
import { Socials } from "../../components/Socials/Socials";
import { Copyright } from "../../components/Copyright/Copyright";

const Design_Item = ({ image }: { image: string }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  const openImage = () => {
    window.open(image, "_blank");
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.75 } },
  };

  return (
    <motion.div
      ref={ref}
      className="designPage__list--item"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <img src={image} alt="randomized image" onClick={openImage} />
    </motion.div>
  );
};

// array of image file names
export const design_images: string[] = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
  "10.webp",
  "11.webp",
  "12.webp",
  "13.webp",
  "14.webp",
  "15.webp",
  "16.webp",
  "17.webp",
  "18.webp",
  "19.webp",
  "20.webp",
  "21.webp",
  "22.webp",
  "23.webp",
  "24.webp",
  "25.webp",
  "26.webp",
  "27.webp",
  "28.webp",
  "29.webp",
  "30.webp",
  "31.webp",
  "32.webp",
  "33.webp",
  "34.webp",
  "35.webp",
  "36.webp",
];

const Design = () => {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    const shuffledArray = [...design_images];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setShuffledImages(shuffledArray);
  }, []);

  return (
    <main className="designPage__wrapper">
      <BrandLogo />
      <Navigation />
      <div className="designPage__container">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="designPage__introduction"
        >
          <h1>Design work</h1>
          <p>
            Welcome to my design portfolio, where I showcase my extensive
            experience and passion for creating compelling visuals that help
            brands stand out in their industries. With a diverse range of design
            skills, I&apos;ve worked on everything from website design and
            development to branding and marketing campaigns, social media
            graphics, and album covers. My goal is always to create designs that
            are not only visually stunning but also functional and effective in
            achieving your goals. Whether you&apos;re looking to launch a new
            product, revamp your brand&apos;s visual identity, or improve your
            social media presence, my portfolio demonstrates my ability to
            deliver tailored solutions for every project.
          </p>
        </motion.section>
        <section className="designPage__list">
          {shuffledImages.map((image, index) => (
            <Design_Item key={index} image={`/assets/Design/${image}`} />
          ))}
        </section>
      </div>
      <Socials />
      <Copyright />
      <Background />
    </main>
  );
};

export default Design;
