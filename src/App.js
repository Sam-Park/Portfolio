import React, { Component } from "react";
import "./App.css";
import Falcano from "./images/falcanoLanding.PNG";
import Github from "./images/GitHub-Mark-Light-32px.png"
import { TweenMax, Power4 } from "gsap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReactTilt from "react-universal-tilt";
function myFunc(el) {
  el.style.backgroundColor = "#000000";
}

class App extends Component {
  constructor() {
    super();
    this.myElement = null;
    this.myTween = null;
    this.myStagger = null;
  }

  componentDidMount() {
    let staggerObjs = [".nav-h", ".nav-h1", ".nav-h2", ".nav-h3", ".nav-h4"];
    this.myStagger = TweenMax.staggerFrom(
      staggerObjs,
      1,
      { opacity: 0, x: 180, ease: Power4.easeOut },
      0.4
    );
  }
  render() {
    const style = {
      border: "1px solid #333",
      width: "450px",
      height: "400px",
      display: "flex",
      alignContent: "center",
      justifyContent: "center"
    };
    return (
      <div className="App">
        <div className="Landing-Container">
          <div className="Nav-container">
            <p className="Name-slide" ref={p => (this.myElement = p)}>
              Samuel
            </p>
            <p className="Sur-Name-Slide">Park</p>
            <AnchorLink className="nav-h" href="#projects">
              Projects
            </AnchorLink>
            <AnchorLink className="nav-h1">Resume</AnchorLink>
            <AnchorLink className="nav-h2">Skills</AnchorLink>
            <AnchorLink className="nav-h3" href="#aboutme">
              About Me
            </AnchorLink>
            <AnchorLink className="nav-h4" href="#contact">
            Contact
            </AnchorLink>
          </div>
          <div id="aboutme" className="Center-Container-About">
            <h1 className="About-Me">
              about <span className="About-Span">me.</span>
            </h1>
          </div>
        </div>

        <div className="Center-Container-Projects">
        <span  id="projects"></span>
          <h1 className="Projects-H1">
            Proje
            <span className="Projects-H1-Span">cts. </span>
          </h1>

          <h1 className="Falcano-H1">Fal<span className="Falcano-H1-Span">cano.</span></h1>
          <div className="Falcano-Wrapper">
          <div className="Falcano-Card-Wrapper">
          <a target="_blank" rel="noopener noreferrer" href="https://www.falcano.app">
            <ReactTilt
              options={{
                speed: 1000,
                scale: 1.01,
                "shine-opacity": 0.3,
                shadow: "true",
                shine: "true",
                max: 3,
                perspective: 500,
                onMouseMove: el => myFunc(el)
              }}
              style={style}
              className="React-Tilt-Card"
              tiltChange={this.output}
              >

              <div className="Falcano-Card">
                <img
                  alt="Project Thumbnail"
                  className="Falcano-Image"
                  src={Falcano}
                  />
              </div>
            </ReactTilt>
          </a>
        <div className="Project-Links">
        <a className="GitHub-Logo" target="_blank" rel="noopener noreferrer" href="https://github.com/Lambda-School-Labs/CS10-flight-log">
          <img  alt="GitHub logo" src={Github} ></img>
        </a>
            <a className="GitHub-Link" target="_blank" rel="noopener noreferrer" href="https://github.com/Lambda-School-Labs/CS10-flight-log">Github Link</a>
          </div>
        </div>
            <p className="Falcano-Paragraph">
              Falcano is my Capstone project for Lambda School, it is a flight log
              for enthusiast aviators and pilots in training. Falcano records and aggregates your
              totals for many different fields for specific aircraft and license types.
               I worked in a
              team of four with a project manager over the course of one month.
              Using <span className="Projects-Paragraph-Span">Django</span> and <span className="Projects-Paragraph-Span">React</span> for our main tech stack, teaching ourselves
              how to use django along the way.
            </p>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
