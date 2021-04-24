import React from "react";
import githubIcon from "../../Images/githubicon.png";
import melbourneReboot from "../../Images/melbourneReboot.png";
import restaurateur from "../../Images/restaurateur.png";
import weatherDashboard from "../../Images/weatherDashboard.png";
import burger from "../../Images/burger.png";
import search from "../../Images/search.png";
import dashboard from "../../Images/dashboard.png";

function ProjectImage() {
  const images = [
    melbourneReboot,
    restaurateur,
    weatherDashboard,
    burger,
    dashboard,
    search,
  ];

  const titles = [
    "Melbourne Reboot",
    "Restaurateur",
    "Weather Dashboard",
    "Eat Da Burger!",
    "Workout Tracker",
    "Employee Directory",
  ];

  const websites = [
    "https://avpizarro.github.io/melbourneReboot/",
    "https://polar-reaches-51270.herokuapp.com/",
    "https://avpizarro.github.io/weatherDashboard/",
    "https://dry-basin-87988.herokuapp.com/",
    "https://evening-journey-59079.herokuapp.com/",
    "https://quiet-beyond-63990.herokuapp.com/",
  ];

  const github = [
    "https://github.com/avpizarro/melbourneReboot.git",
    "https://github.com/avpizarro/restaurateur.git",
    "https://github.com/avpizarro/weatherDashboard.git",
    "https://github.com/avpizarro/burger.git",
    "https://github.com/avpizarro/workoutTracker.git",
    "https://github.com/avpizarro/employeedirectory.git",
  ];

  const linkedImagesElements = [];

  for (let i = 0; i < images.length; i++) {
    const imageElement = (
      <div style={{ marginBottom: "40px" }}>
        <a className="test-popup-link" href={websites[i]} target="_blank">
          <img src={images[i]} alt={titles[i]} className="projectPicture"></img>
        </a>
        <figcaption>
          <a className="git" href={github[i]} target="_blank">
            {titles[i]}
            <span>
              <img className="fluidicon" src={githubIcon} alt="Github icon"></img>
            </span>
            GitHub
          </a>
        </figcaption>
      </div>
    );
    linkedImagesElements.push(imageElement);
  }

  return <>{linkedImagesElements}</>;
}

export default ProjectImage;
