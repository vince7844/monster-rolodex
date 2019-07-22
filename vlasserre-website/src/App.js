import React, { Component, Fragment } from 'react';
import './App.css';
import Projects from "./components/projects/Projects";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Profil from "./components/profil/Profil";
import projects from "./projects";
import "./components/projects/Projects.css"

class App extends Component {
  state = {
    projects
  }

  render() {
    const projects = Object.keys(this.state.projects)
                           .map(key => <Projects key={key} details={this.state.projects[key]} />);
    console.log(projects);
    return (
      <Fragment>
        <Header />
          <div className="home-content">
            <Profil />
            <div className="projects">
              { projects } 
            </div>
          </div> 
         <Footer />
      </Fragment>
    );
  }
}

export default App;
