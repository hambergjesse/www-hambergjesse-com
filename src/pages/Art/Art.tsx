import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Background } from "../../components/Background/Background";
import { BrandLogo } from "../../components/BrandLogo/BrandLogo";
import { Navigation } from "../../components/Navigation/Navigation";
import { Socials } from "../../components/Socials/Socials";
import { Copyright } from "../../components/Copyright/Copyright";

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
      <Navigation />
      <div className="artPage__container">
        <section className="artPage__introduction">
          <h1>Art pieces</h1>
          <p>
            Welcome to my art portfolio, where I showcase my extensive
            experience and passion for creating compelling visuals that are sure
            to capture your imagination. With a diverse range of artistic
            skills, I&apos;ve worked on a wide variety of pieces that include
            photomanipulation art, illustrations, and paintings. My goal is
            always to create artwork that is not only visually stunning but also
            thought-provoking and evocative. Whether you&apos;re looking to add
            a unique piece to your art collection or simply admire beautiful
            artwork, my portfolio demonstrates my ability to deliver pieces that
            are tailored to your tastes and preferences. So take a look and
            discover a world of creativity and imagination!
          </p>
        </section>
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
