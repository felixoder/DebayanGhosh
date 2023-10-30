import SkillsList from "../skillsList/SkillsList"
import "./skills.scss"
import { useState , useEffect} from "react";
import { Frontend , Backend , Programming , DataBase , Devops } from "../skills";

export default function Skills() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list=[
    {
      id: "frontend",
      title: "FrontEnd",
    },{
      id: "backend",
      title: "Backend",

    },
    {
      id:"database",
      title:"DataBase",

    },
    {
      id: "programming",
      title:"Programming",
    },
    {
      id: "devops",
      title:"Devops",
    }

  ]
  useEffect(() => {
    switch(selected){
      case "frontend":
        setData(Frontend)
        break
        case "backend":
        setData(Backend)
        break
        case "database":
        setData(DataBase)
        break
        case "programming":
        setData(Programming)
        break
        case "devops":
          setData(Devops)
          break;
          default:
            setData(Backend)

    }
  }, [selected]);


  return (
    <div className="contact" id="contact">
      <h1>Skills</h1>

      <ul>
        {list.map(item=>
        
          <SkillsList title={item.title} active={selected === item.id} setSelected={setSelected}  id={item.id}/>
          )}
      </ul>
      <div className="container">
        {data.map((d)=>(

        <div className="item" >
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
         
        </div>

        ))}
        
      </div>
      
    </div>
  )
}
