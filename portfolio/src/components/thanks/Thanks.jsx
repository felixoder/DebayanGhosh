import React, { useState } from 'react';
import "./thank.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

export default function Thanks() {
    const iconSize = "5rem";
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked);
    
  };

  return (
      <div className='thanks' id="thanks">
       
        <h1>Thanks for going through the portfolio</h1>
        <h3>Feel Free To Contact Me</h3>
      <div className="container">
     
       
        <a href="https://www.instagram.com/felix__12_7/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon onClick={toggleClick} style={{ fontSize: iconSize }}   className="iconHover"/>
          <p>Instagram</p>
        </a>
        <a href="https://github.com/felixoder" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ fontSize: iconSize }} onClick={toggleClick}    className="iconHover"/>
          <p>Github</p>
        </a>
        <a href="https://www.linkedin.com/in/debayan-ghosh-1671b4224/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ fontSize: iconSize }} onClick={toggleClick}   className="iconHover"/>
          <p>LinkedIn</p>
        </a>
        <a href="mailto:debayanghosh408@gmail.com">
          <AttachEmailIcon onClick={toggleClick} style={{ fontSize: iconSize }}  className="iconHover"/>
          <p>Email</p>
        </a>


        <h4><strong>Eat Code Sleep Repeat</strong></h4>
      

      

        
        
    
       
      </div>
      
    </div>
  );
}
