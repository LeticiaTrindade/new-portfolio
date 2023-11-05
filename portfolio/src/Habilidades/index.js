import "./style.css";
import React from "react";
import ThemeContext from "../ThemeContext";
import { useContext } from "react";

function Habilidades() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        id="habilidades"
        className={`${theme}-mode-text container habilidades  d-flex flex-column align-items-center`}
      >
        <div className=" d-flex flex-column justify-content-around col-md-6">
          <h2 className={`${theme}-mode-text `}>Habilidades</h2>
          <div className="d-flex flex-row justify-content-between">
            <div>
              <h3>Softskills</h3>
              <ul>
                <li>Comunicação</li>
                <li>Trabalho em Equipe</li>
                <li>Escrita</li>
                <li>Pesquisa</li>
                <li>Persistência</li>
                <li>Empatia</li>
              </ul>
            </div>
            <div>
              <h3>Hardskills</h3>
              <ul>
                <li>CSS/JS/HTML</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Node.JS</li>
                <li>Spring Boot</li>
                <li>Firebase</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" softSkills-right d-flex flex-column col-md-6 text-left justify-content-around col-md-6 ">
          <p>
            Possuo ampla experiência com atividades que demandam habilidade de
            comunicação, trabalho em equipe, escrita, pesquisa, persistência e
            empatia. Minha paixão pela tecnologia impulsiona minha constante busca por conhecimento, visando me tornar uma profissional cada vez mais capacitada e completa
          </p>
        </div>
      </div>
    </>
  );
}

export default Habilidades;
