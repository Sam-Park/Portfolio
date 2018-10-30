import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweenMax from 'gsap'

class App extends Component {
  constructor(){
    super();
    this.myElement = null;
    this.myTween = null;
  }

  componentDidMount() {
    this.myTween = TweenMax.to(this.myElement, 1, {x: 100, y: 100});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p ref={p => this.myElement = p}>
            Lets fucking Animate
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
