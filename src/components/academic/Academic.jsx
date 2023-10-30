import "./academic.scss";
import { useState } from "react";

export default function Academic() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      name: "BTECH 1st Sem",
      title: "promoted with 8.76 sgpa",
      img:
        "https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg",
      icon: "assets/writting.png",
      desc:
        "This is the first semester of my college and I have experienced a lot in my college and I have learnt JAVA as my programming skills and HTML, CSS as my dev skills",
    },
    {
      id: 2,
      name: "BTECH 2nd Sem",
      title: "promoted with 8.66 sgpa",
      img:
        "https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg",
      icon: "assets/mobile.png",
      desc:
        "This is the second semester of my college and I have experienced a lot in my college and I have learnt C as my programming skills, and I have experienced Java-Script and a little bit of Node-js as my dev skills",
    },
    {
      id: 3,
      name: "BTECH 3rd Sem",
      title: "I am currently in my 3rd sem",
      img:
        "https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg",
      icon: "assets/linkdin.png",
      desc:
        "This is the third semester of my college and I am recently in this semester and I am learning the DSA and MERN stack",
      featured: true,
    },
    {
      id: 4,
      name: "BTECH 4th Sem",
      title: "promoted with 8.66 sgpa",
      img:
        "https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg",
      icon: "assets/writting.png",
      desc:
        "This is the first semester of my college and I have experienced a lot in my college and I have learnt JAVA as my programming skills and HTML, CSS as my dev skills",
    },
    {
      id: 5,
      name: "BTECH 5th Sem",
      title: "promoted with 8.66 sgpa",
      img:
        "https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg",
      icon: "assets/writting.png",
      desc:
        "This is the first semester of my college and I have experienced a lot in my college and I have learnt JAVA as my programming skills and HTML, CSS as my dev skills",
    },
    {
      id: 6,
      name: "BTECH 6th Sem",
      title: "promoted with 8.66 sgpa",
      img:
        "https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg",
      icon: "assets/writting.png",
      desc:
        "This is the first semester of my college and I have experienced a lot in my college and I have learnt JAVA as my programming skills and HTML, CSS as my dev skills",
    },
    {
      id: 7,
      name: "BTECH 7th Sem",
      title: "promoted with 8.66 sgpa",
      img:
        "https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg",
      icon: "assets/writting.png",
      desc:
        "This is the first semester of my college and I have experienced a lot in my college and I have learnt JAVA as my programming skills and HTML, CSS as my dev skills",
    },
    {
      id: 8,
      name: "BTECH 8th Sem",
      title: "promoted with 8.66 sgpa",
      img:
        "https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg",
      icon: "assets/writting.png",
      desc:
        "This is the first semester of my college and I have experienced a lot in my college and I have learnt JAVA as my programming skills and HTML, CSS as my dev skills",
    },
  ];

  const handleClick = (way) => {
    if (way === "left") {
      setCurrentSlide((prevSlide) =>
        prevSlide - 3 < 0 ? data.length - 3 : prevSlide - 3
      );
    } else {
      setCurrentSlide((prevSlide) =>
        prevSlide + 3 >= data.length ? 0 : prevSlide + 3
      );
    }
  };

  return (
    <div className="testimonials" id="testimonials">
      <h1>Academic Qualification</h1>
      <div className="container">
        {data.slice(currentSlide, currentSlide + 3).map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img src="assets/arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
        <img
          src="assets/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    </div>
  );
}
