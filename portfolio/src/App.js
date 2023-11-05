import "./App.css";
import Dev from "./Dev";
import Home from "./Home";
import PinkLine from "./PinkLine";
import Habilidades from "./Habilidades";
import Projects from "./Projects";
import Formation from "./Formation";
import Footer from "./Footer";
import { useState } from "react";
import ThemeContext from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <body class={`${theme}-body`}>
        <Home />
        <Dev />
        <PinkLine />
        <Habilidades />
        <Projects />
        <Formation />
        <Footer />
      </body>
    </ThemeContext.Provider>
  );
}

export default App;
