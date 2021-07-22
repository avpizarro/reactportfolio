import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profilePicture from "../Images/profilePicture.jpg";

function About() {
  return (
    <div>
      <Header />
      <article className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>About Me</h1>
          </div>
        </div>

        <div className="row">
          <div class="col-lg-1"></div>

          <div className="col-lg-5">
            <img
              src={profilePicture}
              alt="Profile"
              className="profilePicture projectPicture"
            ></img>
            <figcaption className="citation">@fotometria</figcaption>
          </div>

          <div className="col-lg-5">
            <p className="profileDescription">
              Full Stack Developer with experience in
              Fashion Production and Logistics. I am passionate about developing apps to streamline processes 
and improve communication. 
            </p>

            <div className="resume">
              <button type="submit" className="btn btn-primary resume">
                <Link className="nav-link" to="/resume" style={{padding: "0px"}}>
                  Resumé
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-1"></div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export default About;
