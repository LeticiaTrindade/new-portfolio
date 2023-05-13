import "./style.css";
import React from "react";
import bio from "../images/projects/bio.png";
import pokedex from "../images/projects/pokedex.png";
import imc from "../images/projects/imc.png";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Projects() {

    const theme = useContext(ThemeContext);

    return (
        <div id={`${theme}-projects`} className=" d-flex flex-column align-items-center ">

            <h2>Projetos</h2>

            <div className="projects d-flex flex-column align-items-center">
                <a href="https://leticiatrindade.github.io/bio" target="_blank" className="project">
    
                    <img src={bio} />
                    <h3>Página de Links</h3>
                    <p>Uma página de links para redes sociais</p>
                </a>

                <a href="https://leticiatrindade.github.io/Pokedex--DIO" target="_blank" className="project">
                    <img src={pokedex} />
                    <h3>Pokedex</h3>
                    <p>Pokedex dos pokemons da 1ª geração</p>
                </a>

                <a href="https://leticiatrindade.github.io/imc" target="_blank" className="project">
                    <img src={imc} />
                    <h3>IMC</h3>
                    <p>Uma página para calcular o indice de massa corporal</p>
                </a>

            </div>
        </div>
    );
}

export default Projects;