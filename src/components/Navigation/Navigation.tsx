import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <main className="navigation__wrapper">
      <div className="navigation__container">
        <nav className="navigation__container--nav">
          <ul className="navigation__container--nav-list">
            <Link to="/">Home</Link>
            <Link to="/">About me</Link>
            <Link to="/software">Software</Link>
            <Link to="/design">Design</Link>
            <Link to="/art">Art</Link>
          </ul>
        </nav>
      </div>
    </main>
  );
};
