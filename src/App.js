import React, { Component } from 'react';
import './App.css';
import Falcano from './images/falcanoLanding.PNG';
import { TweenMax, Bounce, Elastic, Power4 } from 'gsap';
import TimelineMax from 'gsap';
import Tilt from 'react-tilt';
import ReactTilt  from 'react-universal-tilt';
  function myFunc(el) {
    el.style.backgroundColor = '#000000';
  }

class App extends Component {
  constructor(){
    super();
    this.myElement = null;
    this.myTween = null;
    this.myStagger = null;
    // this.animation = new TimelineMax();
  }
  


  componentDidMount() {
    let staggerObjs = [".nav-h", ".nav-h1", ".nav-h2", ".nav-h3"]
    // this.myTween = TweenMax.to(this.myElement, 1, { y: 45,});
    this.myStagger = TweenMax.staggerFrom(staggerObjs, 1, {opacity:0, x:180, ease:Power4.easeOut}, 0.40);
    // this.animation.to('.nav-h', 1, {y:'150'})
  }
  render() {
    const style = {
      'border': '1px solid #333',
      width: '350px',
      height: '350px',
      marginLeft: '40%',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
    };
    return (
      <div className="App">
      <div className="Landing-Container">
      <div className="Left-container">

          <p className="Name-slide" ref={p => this.myElement = p}>
            Samuel
          </p>
          <p className="Sur-Name-Slide">
            Park
            </p>
          <h4 className="nav-h">Projects</h4>
          <h4 className="nav-h1">Resume</h4>
          <h4 className="nav-h2">Stuff</h4>
          <h4 className="nav-h3">More Stuff</h4>
      </div>
      <div className="Center-Container-About">
      <h1 className="About-Me">about <span className="About-Span">me.</span></h1>
      </div>
      </div>

    <div className="Center-Container-Projects">
    <div className="Falcano-Wrapper">
      <ReactTilt
        options={{
          speed: 1000,
          scale: 1.02,
          'shine-opacity': .3,
          shadow: 'true',
          shine: 'true',
          max: 5,
          perspective: 500,
          onMouseMove: el => myFunc(el)
        }}
        style={style}
        
        className="tilt-elem my-tilt"
        
        tiltChange={this.output}
        >
      <div className="Falcano-Card">
        <img 
        className="Falcano-Image"
        src={Falcano} />
        </div>
        </ReactTilt>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
