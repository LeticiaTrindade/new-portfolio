import "./style.css";
import React from "react";
import github from "../images/skills/github.svg";
import html from "../images/skills/html.svg";
import css from "../images/skills/css3.svg";
import bootstrap from "../images/skills/bootstrap.svg";
import figma from "../images/skills/figma.svg";


function FrontEnd() {
    return (
        <>
            <div id="softSkills" className="container softSkills  d-flex flex-column align-items-center">
                <div className=" d-flex flex-column justify-content-around col-md-6">
                    <h2>Soft Skills</h2>
                    <div className="d-flex flex-row justify-content-between">
                        <div>
                        <h3>Habilidades</h3>
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
                            <h3>Técnicas</h3>
                            <ul>
                                <li>Lógica de programação</li>
                                <li>Java</li>
                                <li>Pacote Office</li>
                                <li>Edição de vídeo</li>
                                <li>UX Design</li>
                                <li>Banco de Dados</li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className=" softSkills-right d-flex flex-column col-md-6 text-left justify-content-around col-md-6 ">
                <p>Possuo ampla experiência com atividades que demandam habilidade de comunicação, trabalho em equipe, escrita, pesquisa, persistência e empatia.

                    Também tive contato com back-end: Java, MySQL e Spring Boot. Tenho interesse em estudar ainda mais, para ter uma base sólida nessa área. Me identifiquei imensamente com lógica de programação e Java puro.</p>
            </div>
        </div>
        </>
    );
}

export default FrontEnd;