
import "./intro.scss";

export default function Intro() {


  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Hi There I'm</h1>
          <h1>Debayan Ghosh</h1>

          <h3>
            Freelance <span >Web Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.png" alt="" />
        </a>
      </div>
    </div>
  );
}
