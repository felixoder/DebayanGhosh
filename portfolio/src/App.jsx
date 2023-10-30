import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";

import Skills from "./components/skills/Skills";
import "./app.scss"
import {useState} from "react"
import Menu from "./components/menu/Menu";
import Academic from "./components/academic/Academic";
import Thanks from "./components/thanks/Thanks";



function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
       <Academic/>
        <Skills/>
        <Thanks/>

      </div>
     

    </div>
  );
}

export default App;
