import React from "react";
import Project from "../Project";
import "./style.css";

function ProjectContainer() {
  return (
    <article class="container" style={{maxWidth: "90%"}}>
      <div class="row">
        <div class="col-sm-12">
          <h1>Portfolio</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-2"></div>

        <div class="col-lg-8"></div>
          <Project />
      </div>
      <div class="col-lg-2 "></div>
    </article>
  );
}

export default ProjectContainer;
