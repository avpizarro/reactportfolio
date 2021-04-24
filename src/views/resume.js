import ResumeImage from "../Images/resume.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Resume() {
  return (
    <div>
        <Header />
      <article class="container">
        <div class="row">
          <div class="col-sm-12">
            <img className="projectPicture" src={ResumeImage} alt="Resume" style={{maxWidth: "90%"}}></img>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export default Resume;
