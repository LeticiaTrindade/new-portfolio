import "./style.css";
import React from "react";
import Menu from "../Menu";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import profile from "../images/profile-light.png";

function Home() {

    const theme = useContext(ThemeContext);

    return (
        <>
            <Menu />

            <div className=" home container d-flex flex-column">
                <div className=" col-12 col-md-6 text-center align-self-center ">
                    <img className={`${theme}-profile`} src={profile}></img>
                </div>
                <div className={` ${theme}-mode-text ${theme}-home-bio home-bio col-12 col-md-6 text-center d-flex flex-column align-self-center`}>
                    <h4>DESENVOLVEDORA FRONT-END</h4>
                    <h1>LETICIA TRINDADE</h1>
                    <p>Olá! Tudo bem? Sou desenvolvedora front-end e estudante de licenciatura em Computação.
                        Te convido a conhecer melhor meu trabalho.</p>
                    <div className="home-buttons d-flex flex-row justify-content-between">
                        <a href={`#${theme}-projects`}> <button id="btn-portfolio">PORTFÓLIO</button></a>
                        <a href="#formation"><button id="btn-formation">FORMAÇÃO</button></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;