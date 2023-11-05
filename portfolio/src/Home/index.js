import "./style.css";
import React from "react";
import Menu from "../Menu";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  const imageSource =
    theme === "light"
      ? require("../images/profile-light.png")
      : require("../images/profile-dark.png");

  return (
    <>
      <Menu />

      <div className=" home container d-flex flex-column">
        <div className=" col-12 col-md-6 text-center align-self-center ">
          <img
            className={`${theme}-profile`}
            src={imageSource}
            alt="imagem de perfil"
          />
        </div>
        <div
          className={` ${theme}-mode-text ${theme}-home-bio home-bio col-12 col-md-6 text-center d-flex flex-column align-self-center`}
        >
          <h4>DESENVOLVEDORA FULL STACK</h4>
          <h1>LETICIA TRINDADE</h1>
          <p>
            Olá! Tudo bem? Sou desenvolvedora Full Stack, estudante de
            licenciatura em Computação e ADS. Te convido a conhecer melhor o meu
            trabalho.
          </p>
          <div className="home-buttons d-flex flex-row justify-content-between">
            <a href={`#${theme}-projects`}>
              {" "}
              <button id="btn-portfolio">PORTFÓLIO</button>
            </a>
            <a href="#formation">
              <button id="btn-formation">FORMAÇÃO</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
