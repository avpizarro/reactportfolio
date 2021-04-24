import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import Resume from "./views/resume";

import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/resume">
        <Resume />
      </Route>
    </Router>
  );
}

export default App;
