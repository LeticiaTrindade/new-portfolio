import "./style.css";
import React, {useState, useContext } from "react";
import ThemeContext from "../ThemeContext";
function Menu() {

    const theme = useContext(ThemeContext);
    const setTheme = useState('light');

    return (
        <nav className={`${theme}-mode-text navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>

           <button className={`${theme}-mode`} id="sun" ></button>

            <div className="icons navbar">
                <a href="https://github.com/LeticiaTrindade" target="_blank">
                    <button className={`${theme}-mode icon-menu ${theme}-icon-github`}
                    ></button>
                </a>
                <a href="https://www.linkedin.com/in/leticiatrindadet" target="_blank">
                    <button className={`${theme}-mode icon-menu ${theme}-icon-linkedin`}></button>
                </a>
                <a href="https://www.instagram.com/lelly.dev" target="_blank">
                    <button className={`${theme}-mode icon-menu ${theme}-icon-instagram`}></button>
                </a>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className=" navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#frontEnd">front-end</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link efect" href="#softSkills">soft skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={`#${theme}-projects`}>portfólio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#formation">formação</a>
                    </li>
                </ul>
                <span className="switch__container" id="switch">
                    <input class="switch switch--shadow"
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={(e) => {
                            setTheme(e.target.checked ? 'dark' : 'light')
                        }}
                    />
                    <label for="switch-shadow"></label>
                </span>
            </div>
        </nav>


    );
}

export default Menu;