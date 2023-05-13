import "./style.css";
import React from "react";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";

function Footer() {
    const theme = useContext(ThemeContext);
    return (
        <div className="footer d-flex flex-row justify-content-around">
            <div className="icons d-flex flex-row justify-content-around">
            <a href="https://github.com/LeticiaTrindade" target="_blank">
                <button className={`dark-mode icon-menu ${theme}-icon-github`}></button>
            </a>
            <a href="https://www.linkedin.com/in/leticiatrindadet" target="_blank">
                <button className={`dark-mode icon-menu ${theme}-icon-linkedin`}></button>
            </a>
            <a href="https://www.instagram.com/lelly.dev" target="_blank">
                <button className={`dark-mode icon-menu ${theme}-icon-instagram`}></button>
            </a>
            </div>
        </div>
    );
}

export default Footer;