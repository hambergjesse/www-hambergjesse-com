import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Background } from "../../components/Background/Background";
import { BrandLogo } from "../../components/BrandLogo/BrandLogo";
import { Socials } from "../../components/Socials/Socials";
import { Copyright } from "../../components/Copyright/Copyright";

import { ScrollToTop } from "../../components/ScrollToTop";
interface ArtImage {
  image: string;
  image_lowRes: string;
  title: string;
  desc: string;
  created: string;
  canvas: string;
}

const art_images: ArtImage[] = [
  {
    image: "1.webp",
    image_lowRes: "1_low.webp",
    title: "Barren Earth",
    desc: "No law. No order. No time or space. Danger was the desert’s breath, and the landscape changed with every wind.",
    created: "Jun 19, 2021",
    canvas: "2800x3200",
  },
  {
    image: "2.webp",
    image_lowRes: "2_low.webp",
    title: "Natures Touch",
    desc: "The first collaboration piece between @mavroses & @thepipedreamer. This piece features the best each artist has to offer. With a perfect blend of both their primary skill sets. Photo manipulation, editing, and meticulously hand-painted elements.",
    created: "Mar 11, 2021",
    canvas: "5300x6500",
  },
  {
    image: "3.webp",
    image_lowRes: "3_low.webp",
    title: "Devils Embrace",
    desc: "Embrace your inner demons, even they are apart of who you are as a person. Everyone has a dark side and you should not be embarrassed by yours.",
    created: "Mar 06, 2021",
    canvas: "2160x2160",
  },
  {
    image: "4.webp",
    image_lowRes: "4_low.webp",
    title: "Drenched Emotions",
    desc: "Sometimes I pretend I’m an anchor because there’s a difference between sinking and drowning.",
    created: "Mar 25, 2021",
    canvas: "2800x3200",
  },
  {
    image: "5.webp",
    image_lowRes: "5_low.webp",
    title: "Reverse Atlas",
    desc: "After an eternity of carrying the heavens over his head, Atlas decided to lie down on top of them to rest his head instead.",
    created: "Feb 26, 2021",
    canvas: "2160x2160",
  },
  {
    image: "6.webp",
    image_lowRes: "6_low.webp",
    title: "Earths Essence",
    desc: "Away, away, from men and towns, To the wild wood and the downs, — To the silent wilderness, Where the soul need not repress its music.",
    created: "Apr 30, 2021",
    canvas: "2800x3200",
  },
];

const Art_Item = ({ image, title, desc, created, canvas }: ArtImage) => {
  const openImage = () => {
    window.open(image, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="artPage__list--item"
    >
      <motion.img
        className="artPage__list--item-img"
        src={image}
        data-src={image}
        alt={title}
        onClick={openImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        loading="lazy"
      />
      <div className="artPage__list--item-text">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="artPage__list--item-text-sub">
          <p>
            <strong>Created:</strong> {created}
          </p>
          <p>
            <strong>Canvas size:</strong> {canvas}
          </p>
        </div>
        <button onClick={openImage}>View Image</button>
      </div>
    </motion.div>
  );
};

const Art = () => {
  const [shuffledImages, setShuffledImages] = useState<ArtImage[]>([]);

  useEffect(() => {
    const shuffledArray = [...art_images];
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
    <main className="artPage__wrapper">
      <BrandLogo />
      <ScrollToTop />
      <div className="artPage__container">
        <section className="artPage__list">
          {shuffledImages.map((item, index) => (
            <Art_Item
              key={index}
              image={`/assets/Art/${item.image}`}
              image_lowRes={`/assets/Art/lowres/${item.image_lowRes}`}
              title={item.title}
              desc={item.desc}
              created={item.created}
              canvas={item.canvas}
            />
          ))}
        </section>
      </div>
      <Socials />
      <Copyright />
      <Background />
    </main>
  );
};

export default Art;
