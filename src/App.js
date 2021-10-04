import "./App.css";
import Header from "./Header.js";
import Intro from "./Intro.js";
import About from "./About.js";
import Project from "./Project.js";
import Resume from "./Resume.js";
import Contact from "./Contact.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Intro />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
