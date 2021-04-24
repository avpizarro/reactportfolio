import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header />
      <article class="container contactContainer">
        <div class="row contactRow contactColumn">
          <div class="col-sm-12">
            <h1>Contact</h1>
          </div>
        </div>

        <div class="row contactRow">
          <div class="col-sm-8 contactColumn">
            <button
              type="submit"
              class="btn btn-primary linkedIn"
              onClick={() =>
                window.open("https://www.linkedin.com/in/avpizarro", "_blank")
              }
            >
              LinkedIn
            </button>
            <button
              type="submit"
              class="btn btn-primary gitHub"
              onClick={() =>
                window.open("https://github.com/avpizarro", "_blank")
              }
            >
              GitHub
            </button>
            <button class="btn btn-primary gitHub mail">
              <a class="git" href="mailto:avpizarro@live.com">
                Email
              </a>
            </button>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export default About;
