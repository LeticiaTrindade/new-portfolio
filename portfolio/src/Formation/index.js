import "./style.css";
import React from "react";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Formation() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        id="formation"
        className={`${theme}-mode-text  container formation d-flex flex-column align-items-center`}
      >
        <div className=" d-flex flex-column justify-content-around col-md-6">
          <h2 className={`${theme}-mode-text `}>Formação & Certificações</h2>
          <div className="d-flex flex-column justify-content-between">
            <div>
              <h3>Computação Gráfica</h3>
              <p>Instituto Federal de Pernambuco (2019-2021)</p>
              <p>Concluído</p>
            </div>
            <div>
              <h3>Licenciatura em Computação</h3>
              <p>Universidade Federal Rural de Pernambuco (2022-2026)</p>
              <p>
                Cursando o quarto período do curso superior “Licenciatura em
                Computação”.
              </p>
            </div>
            <div>
              <h3>Analise e Desenvolvimento de Sistemas</h3>
              <p>Faculdade Prepara(2023-2025)</p>
              <p>
                Cursando o terceiro período do curso superior “Analise e Desenvolvimento de Sistemas”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formation;
