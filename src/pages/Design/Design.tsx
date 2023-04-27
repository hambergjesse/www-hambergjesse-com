import { useEffect, useState } from "react";
import { Background } from "../../components/Background/Background";
import { BrandLogo } from "../../components/BrandLogo/BrandLogo";
import { Copyright } from "../../components/Copyright/Copyright";

const Design_Item = ({ image }: { image: string }) => {
  const openImage = () => {
    window.open(image, "_blank");
  };

  return (
    <div className="designPage__list--item">
      <img src={image} alt="randomized image" onClick={openImage} />
    </div>
  );
};

const Design = () => {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    // array of image file names
    const images: string[] = [
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
    ];

    const shuffledArray = [...images];
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
      <div className="designPage__container">
        <h2>Design work</h2>
        <section className="designPage__list">
          {shuffledImages.map((image, index) => (
            <Design_Item
              key={index}
              image={`src/pages/Design/assets/${image}`}
            />
          ))}
        </section>
      </div>
      <Copyright />
      <Background />
    </main>
  );
};

export default Design;
