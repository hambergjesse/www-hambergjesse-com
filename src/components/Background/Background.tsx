export const Background = () => {
  return (
    <div
      className="background__wrapper"
      style={{
        background: "$portfolio-highlight",
        position: "absolute",
        height: "100%",
        opacity: "20%",
        width: "50%",
        zIndex: "-1",
        right: "0",
      }}
    ></div>
  );
};
