import "./style.css";
import React from "react";
import ThemeContext from "../ThemeContext";
function Menu() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav
      className={`${theme}-mode-text navbar navbar-expand-lg navbar-${theme} bg-${theme}`}
    >
      <div className="icons navbar">
        <a
          href="https://github.com/LeticiaTrindade"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className={`${theme}-mode icon-menu ${theme}-icon-github`}
          ></button>
        </a>
        <a
          href="https://www.linkedin.com/in/leticiatrindadet"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className={`${theme}-mode icon-menu ${theme}-icon-linkedin`}
          ></button>
        </a>
        <a
          href="https://www.instagram.com/prof.lelly"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className={`${theme}-mode icon-menu ${theme}-icon-instagram`}
          ></button>
        </a>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className=" navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#frontEnd">
              front-end
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link efect" href="#softSkills">
              soft skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={`#${theme}-projects`}>
              portfólio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#formation">
              formação
            </a>
          </li>
        </ul>
        <button className={`${theme}-mode`} onClick={changeTheme} />
      </div>
    </nav>
  );
}

export default Menu;
