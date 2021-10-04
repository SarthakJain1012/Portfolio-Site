import React from "react";
import "./Intro.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";

function Intro() {
  return (
    <div
      className="intro"
      style={{
        backgroundImage: `url("/image.jpg")`,
      }}
    >
      <div className="content">
        <h1 className="name_text">SARTHAK JAIN</h1>
        <p>Web Developer</p>
        <IconButton
          target="_blank"
          href="https://www.facebook.com/sarthak.jain.710667"
        >
          <FacebookRoundedIcon />
        </IconButton>
        <IconButton target="_blank" href="https://github.com/SarthakJain1012">
          <GitHubIcon />
        </IconButton>
        <IconButton
          target="_blank"
          href="https://www.linkedin.com/in/sarthak-jain-69706b1bb"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          target="_blank"
          href="https://www.instagram.com/sarthakjain1012/"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton target="_blank" href="mailto:sarthak.jain058@gmail.com">
          <MailIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Intro;
