import React, { Component } from 'react';
import './App.css';
import { TweenMax, Bounce, Elastic, Power4 } from 'gsap'
import TimelineMax from 'gsap'

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
    this.myTween = TweenMax.to(this.myElement, 1, { y: 45,});
    this.myStagger = TweenMax.staggerTo(staggerObjs, 1.3, { x:180, ease:Power4.easeOut}, 0.45);
    // this.animation.to('.nav-h', 1, {y:'150'})
  }
  render() {
    return (
      <div className="App">
          <p className="Name-slide" ref={p => this.myElement = p}>
            Samuel Park
          </p>
          <h4 className="nav-h">Projects</h4>
          <h4 className="nav-h1">Resume</h4>
          <h4 className="nav-h2">Stuff</h4>
          <h4 className="nav-h3">More Stuff</h4>
          
      </div>
    );
  }
}

export default App;
