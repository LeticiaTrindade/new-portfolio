import "./style.css";
import React from "react";
import bio from "../images/projects/bio.png";
import pokedex from "../images/projects/pokedex.png";
import crud from "../images/projects/crud.png";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id={`${theme}-projects`}
      className=" d-flex flex-column align-items-center "
    >
      <h2>Projetos</h2>

      <div className="projects d-flex flex-column align-items-center">

        <a
          href="https://leticiatrindade.github.io/UserManagerApp"
          target="_blank"
          className="project"
          rel="noreferrer"
        >
          <img src={crud} alt="crud" />
          <h3>
            Gerenciamento de usuários</h3>
          <p>Uma página para gerenciar usuários utilizando banco de dados</p>
        </a>


        <a
          href="https://leticiatrindade.github.io/bio"
          target="_blank"
          className="project"
          rel="noreferrer"
        >
          <img src={bio} alt="Página de Links" />
          <h3>Página de Links</h3>
          <p>Uma página de links para redes sociais com React</p>
        </a>

        <a
          href="https://leticiatrindade.github.io/Pokedex--DIO"
          target="_blank"
          className="project"
          rel="noreferrer"
        >
          <img src={pokedex} alt="Pokedex" />
          <h3>Pokedex</h3>
          <p>Pokedex dos pokemons da 1ª geração utilizando API</p>
        </a>


      </div>
    </div>
  );
}

export default Projects;
