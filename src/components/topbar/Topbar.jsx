import "./topbar.scss"
import { Person , Mail } from "@mui/icons-material"
export default function Topbar({menuOpen , setMenuOpen}) {
  return (
    <div className={'topbar ' +(menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Debayan.</a>
                <div className="itemContainer">
                    <Person className="icon"/>
                    <span>+91 - 9609384607</span>

                </div>
                <div className="itemContainer">
                    <Mail/>
                    <span>debayanghosh408@gmail.com</span>

                </div>
            
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
