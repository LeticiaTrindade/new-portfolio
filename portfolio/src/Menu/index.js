import "./style.css";
import React from "react";




function Menu() {



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <button className="dark-mode" id="sun"></button>

            <div className="icons navbar">
                <a href="https://github.com/LeticiaTrindade" target="_blank">
                    <button className="dark-mode icon-menu icon-github"></button>
                </a>
                <a href="https://www.linkedin.com/in/leticiatrindadet" target="_blank">
                    <button className="dark-mode icon-menu icon-linkedin"></button>
                </a>
                <a href="https://www.instagram.com/lelly.dev" target="_blank">
                    <button className="dark-mode icon-menu icon-instagram"></button>
                </a>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#frontEnd">front-end</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link efect" href="#softSkills">soft skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">portfólio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#formation">formação</a>
                    </li>
                </ul>
                <span className="switch__container" id="switch">
                    <input id="switch-shadow" class="switch switch--shadow" type="checkbox" />
                    <label for="switch-shadow"></label>
                </span>
            </div>
        </nav>


    );
}

export default Menu;