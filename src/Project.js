import React from "react";
import "./Project.css";
function Project() {
  return (
    <div className="project">
      <h1 className="heading">My Projects</h1>
      <div className="tinder_frame">
        <iframe
          title="Tinder Clone"
          src="//tinder-clone-765c9.firebaseapp.com/"
          className="project__tinder"
        ></iframe>
        <div className="desc">
          <h2>Tinder Clone</h2>
          <p>This is a Tinder Clone which was made using React Js Framework</p>
          <a href="https://tinder-clone-765c9.firebaseapp.com/">
            <button>Visit Site</button>
          </a>
        </div>
      </div>
      <div className="tinder_frame">
        <div className="desc">
          <h2>Ecommerce Website</h2>
          <p>This is a Ecommerce Website which was made using Django</p>
          <a href="https://ecommercesarthak.herokuapp.com/">
            <button>Visit Site</button>
          </a>
        </div>
        <iframe
          title="Ecommerce Site"
          src="https://ecommercesarthak.herokuapp.com/"
          className="project__tinder"
        ></iframe>
      </div>
    </div>
  );
}

export default Project;
