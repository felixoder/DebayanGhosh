
import "./menu.scss"

export default function Menu({menuOpen , setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Works</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">Academic Details</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Skills</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#thanks">Acknowledgement</a>
            </li>
        </ul>
      
    </div>
  )
}
