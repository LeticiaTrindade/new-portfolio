import "./style.css";
import React from "react";
import git from "../images/skills/git.svg";
import html from "../images/skills/html.svg";
import css from "../images/skills/css3.svg";
import bootstrap from "../images/skills/bootstrap.svg";
import figma from "../images/skills/figma.svg";
import firebase from "../images/skills/firebase.svg";
import js from "../images/skills/js.svg";
import nodejs from "../images/skills/node-js.svg";
import react from "../images/skills/react.svg";
import springboot from "../images/skills/spring-boot.svg";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";

function Dev() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        id="dev"
        className="container dev d-flex flex-column align-items-end align-items-center"
      >
        <div
          className={`${theme}-mode-text littleScreen dev-text d-flex flex-column justify-content-around col-md-6`}
        >
          <div>
            <h2 className={`${theme}-mode-text `}>Computação Gráfica</h2>
            <p>
              Iniciei na área da tecnologia com o curso de computação gráfica.
            </p>

            <p>
              {" "}
              Aprendi a utilizar várias ferramentas como pacote Adobe, Blender,
              autocad e muitos outros, além de começar a estudar os conceitos de
              UI e UX design. Foi onde tive meu primeiro contato com a
              programação, criei alguns jogos 2D e me apaixonei pela área.
            </p>
          </div>
          <div>
            <h2 className={`${theme}-mode-text `}>Desenvolvimento Full Stack</h2>
            <p>
              Em 2022 participei de alguns bootcamps onde connheci várias
              vertentes da programação e decidi focar em desenvolvimento
              full stack.
            </p>

            <p>
              Me anima poder desenvolver e logo conseguir visualizar meu
              trabalho, também sou apaixonada pela lógica e resolução de problemas. ♥
            </p>
          </div>
        </div>
        <div
          className={`${theme}-techniques d-flex flex-column col-md-6 text-center justify-content-around col-md-6 `}
        >
          <div id="skills">
            <h2 className="h2pink">Conhecimento Técnico</h2>
              <div className="d-flex flex-row justify-content-around  ">
                <img className="dev-icon" src={git} alt="ícone git" />
                <img className="dev-icon" src={html} alt="ícone html" />
                <img className="dev-icon" src={css} alt="ícone css" />
                <img className="dev-icon" src={bootstrap} alt="ícone bootstrap" />
                <img className="dev-icon" src={figma} alt="ícone figma" />
              </div>
              <div className="d-flex flex-row justify-content-around  ">
                <img className="dev-icon" src={firebase} alt="ícone firebase" />
                <img className="dev-icon" src={nodejs} alt="ícone node.js" />
                <img className="dev-icon" src={js} alt="ícone JavaScript" />
                <img className="dev-icon" src={react} alt="ícone react" />
                <img className="dev-icon" src={springboot} alt="ícone Spring Boot" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dev;
