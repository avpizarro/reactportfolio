import ResumeImage from "../Images/resume.pdf";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Resume() {
  return (
    <div>
        <Header />
      <article class="container">
        <div class="row">
          <div class="col-sm-12">
            <img className="projectPicture" src={ResumeImage} alt="Resume"></img>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export default Resume;
