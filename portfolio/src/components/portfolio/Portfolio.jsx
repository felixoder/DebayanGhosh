import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { useState , useEffect} from "react";
import { featuredPortfolio , WebPortfolio , ReactPortfolio , DesignPortfolio } from "../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list=[
    {
      id: "featured",
      title: "Featured",
    },{
      id: "web",
      title: "Web-App",

    },
    {
      id:"react",
      title:"React App",

    },
    {
      id: "design",
      title:"Design",
    }

  ]
  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio)
        break
        case "web":
        setData(WebPortfolio)
        break
        case "react":
        setData(ReactPortfolio)
        break
        case "design":
        setData(DesignPortfolio)
        break
        default:
          setData(featuredPortfolio)
    }
  }, [selected]);


  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <p>Hover to View the projects</p>
      <ul>
        {list.map(item=>
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected}  id={item.id}/>
          )}
      </ul>
      <div className="container">
        {data.map((d)=>(

        <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        
          <button id="up"><a href={d.Vurl} target="_blank"  rel="noreferrer">View Live</a></button>
          <button id="down"><a href={d.code} target="_blank"  rel="noreferrer">View Code</a></button>

          
         
        </div>
        
          

        ))}
        
        
      </div>
      
    </div>
  )
}
