import "./style.css";
import React from "react";
import github from "../images/skills/github.svg";
import html from "../images/skills/html.svg";
import css from "../images/skills/css3.svg";
import bootstrap from "../images/skills/bootstrap.svg";
import figma from "../images/skills/figma.svg";


function Formation() {
    return (
        <>
            <div id="formation" className="container formation d-flex flex-column align-items-center">
                <div className=" d-flex flex-column justify-content-around col-md-6">
                    <h2>Formação & Certificações</h2>
                    <div className="d-flex flex-column justify-content-between">
                        <div>
                            <h3>Computação Gráfica</h3>
                            <p>Instituto Federal de Pernambuco (2019-2021)</p>
                            <p>Concluído</p>
                        </div>
                        <div>
                            <h3>Licenciatura em Computação</h3>
                            <p>Universidade Federal Rural de Pernambuco (2020-2024)</p>
                            <p>Cursando o quarto período do curso superior “Licenciatura em Computação”.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Formation;