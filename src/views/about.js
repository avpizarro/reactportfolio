import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profilePicture from "../Images/profilePicture.jpg";

function About() {
  return (
    <div>
      <Header />
      <article className="container" style={{ maxWidth: "90%" }}>
        <div className="row">
          <div className="col-sm-12">
            <h1>About Me</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <img
              src={profilePicture}
              alt="Profile"
              className="profilePicture projectPicture"
            ></img>
            <figcaption className="citation">@fotometria</figcaption>
          </div>

          <div className="col-lg-6">
            <p className="profileDescription">
              Full Stack Development student at Monash, with experience in
              Fashion Production and Logistics.
            </p>

            <div className="resume">
              <button type="submit" className="btn btn-primary resume">
                <Link className="nav-link" to="/resume">
                  Resumé
                </Link>
              </button>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export default About;
