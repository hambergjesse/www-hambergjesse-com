import { Link } from "react-router-dom";

export const Navigation = () => {
  type Style = {
    link: string;
    text: string;
  };

  const linkArr: Style[] = [
    { link: "/", text: "Home" },
    { link: "/software", text: "Software" },
    { link: "/design", text: "Design" },
    { link: "/art", text: "Art" },
  ];

  return (
    <main className="navigation__wrapper">
      <div className="navigation__container">
        <nav className="navigation__container--nav">
          <ul className="navigation__container--nav-list">
            {linkArr.map((item, index: number) => (
              <Link to={item.link} key={index}>
                {item.text}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
};
