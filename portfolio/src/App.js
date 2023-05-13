import './App.css';
import FrontEnd from './FrontEnd';
import Home from "./Home";
import PinkLine from './PinkLine';
import SoftSkills from './SoftSkills';
import Projects from './Projects';
import Formation from './Formation';
import Footer from './Footer';
import { useState } from 'react';
import ThemeContext from './ThemeContext';

function App() {  

  const [theme, setTheme,] = useState('light');

  
  return ( <ThemeContext.Provider value={theme}>
    <body class={`${theme}-body`}>
    
    <label>
                        <input
                            type="checkbox"
                            checked={theme === 'dark'}
                            onChange={(e) => {
                                setTheme(e.target.checked ? 'dark' : 'light');

                            }}
                        />
                        Use dark mode
                    </label>
    <Home />
    <FrontEnd />
    <PinkLine />
    <SoftSkills />
    <Projects />
    <Formation />
    <Footer />
    </body>
    </ThemeContext.Provider>
  );
}

export default App;
