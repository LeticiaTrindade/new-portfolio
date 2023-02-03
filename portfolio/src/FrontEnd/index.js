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
            <div id="frontEnd" className="container frontEnd d-flex flex-column align-items-end align-items-center">
                <div className=" littleScreen frontEnd-text d-flex flex-column justify-content-around col-md-6">
                    <div>
                        <h2>Computação Gráfica</h2>
                        <p>Iniciei na área da tecnologia com o curso de computação gráfica.</p>

                        <p>  Aprendi a utilizar várias ferramentas como pacote Adobe, Blender, autocad e muitos outros, além de começar a estudar os conceitos de UI e UX design. Foi onde tive meu primeiro contato com a programação, criei alguns jogos 2D e me apaixonei pela área.</p>
                    </div>
                    <div>
                        <h2>Desenvolvimento Front-End</h2>
                        <p>Em 2022 participei de alguns bootcamps onde connheci várias vertentes da programação e decidi focar em desenvolvimento front-end.</p>

                        <p>Me anima poder desenvolver e logo conseguir visualizar meu trabalho. Torna tudo mais divertido ♥</p>
                    </div>
                </div>
                <div className="techniques d-flex flex-column col-md-6 text-center justify-content-around col-md-6 ">
                    <div id="skills">
                        <h2 className="h2pink">Conhecimento Técnico</h2>
                        <div className="d-flex flex-row justify-content-around  ">
                            <img className="frontEnd-icon" src={github} />
                            <img className="frontEnd-icon" src={html} />
                            <img className="frontEnd-icon" src={css} />
                            <img className="frontEnd-icon" src={bootstrap} />
                            <img className="frontEnd-icon" src={figma} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FrontEnd;