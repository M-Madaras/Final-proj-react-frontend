import { Link } from "react-router-dom";
import "../../styles/Navbar.css"

export default function Navbar() {
  return (
    <>
      <nav className="header">
        <section className="header-logo-container">
          <img
            className="tropical"
            src="/src/trees.png"
          ></img>
        </section>

        <section className="main-social-container">
          <section className="link-container">
            <Link className="route-links" to="/">
              Home
            </Link>
          </section>
          <div className="social-container">
            <a
              href="/https://github.com/M-Madaras"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo-img"
                src="/GitHub-Mark-32px.png"
              ></img>
            </a>
            <a
              href="/https://www.linkedin.com/in/mason-madaras-351b47116/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo-img"
                src="/LI-In-Bug.png">
                </img>
            </a>
          </div>
        </section>
      </nav>
    </>
  );
}