
import "./work.scss"
import { useState } from "react";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data=[
    {
      id:1,
      icon: "./assets/globe.png",
      title:"Web Developement",
      desc: "A passionate web development enthusiast  ",
      img:"https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"

      
  }, 
  {
    id:2,
      icon: "./assets/react.png",
      title:"React Developement",
      desc: "Passionate React developer   ",
      img:"assets/yt.jpg"

    
}, 
{
  id:3,
  icon: "./assets/chrome.png",
  title:"Web Designing",
  desc: "A passionate web design enthusiast.",
  img:"assets/amazon.jpg"

  
}, 
{
  id:4,
  icon: "./assets/chrome.png",
  title:"Competetive Programmer",
  desc:"Competetive Programmer.",
  img:"assets/writting.png"

  
}, 
  ]
  const handleClick=(way)=>{
    way === "left"?setCurrentSlide(currentSlide >0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide<data.length -1? currentSlide+1:0);
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imageContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()} />
    </div>
  );
}
