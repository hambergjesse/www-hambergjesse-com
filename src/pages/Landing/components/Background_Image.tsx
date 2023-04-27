export const Background_Image = ({ img }: { img: string }) => {
  type Style = {
    [key: string]: string;
  };

  const backgroundStyle: Style = {
    filter: "grayscale(100%)",
    backgroundImage: img,
    objectFit: "cover",
    position: "absolute",
    height: "100%",
    opacity: "5%",
    width: "50%",
    zIndex: "-1",
    left: "0",
    top: "0",
  };

  return (
    <img
      src={img}
      alt="background-image"
      className="background-img"
      style={backgroundStyle}
    ></img>
  );
};
