import React from "react";
import { Tilt } from "react-tilt";
import {
  
  GlassMagnifier,
  
} from "react-image-magnifiers";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
export default function Tilt1() {
  return (
    <>
      <Tilt
        options={defaultOptions}
        style={{
          height: 200,
          width: 200,
          background: "linear-gradient(to bottom, #dc2424, #4a569d)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "90px",
          marginTop: "50px",
          boxShadow: "0px 0px 50px black",
          cursor: "pointer",
        }}
      >
        <div style={{ fontSize: "80px" }}>👽</div>
      </Tilt>

      <div className="my_div">
        <GlassMagnifier
          imageSrc="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
          imageAlt="Example"
          magnifierSize={"100px"} // Set the size of the magnifier
          style={{
            width: "200px",
            height: "200px",
            marginLeft: "90px",
            border: "1px solid transparent",
            borderRadius: "9px",
            marginTop: "10px",
            boxShadow: "0px 0px 50px black",
          }} // Set the size of the image
        />
      </div>
    </>
  );
}
