import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {
  data = [];

  msgStyle = {
    fontSize: '24pt',
    color: '#900',
    margin: '20px 0',
    padding: '5px',
  }
  area = {
    width: '500px',
    height: '500px',
    border: '1px solid blue'
  }

  constructor(props){
    super(props);
    this.state = {
      list:this.data
    };
    this.doAction = this.doAction.bind(this);
  };

  doAction(e){
    let x = e.pageX;
    let y = e.pageY;
    this.data.push({x:x, y:y});
    this.setState({
      list:this.data
    });
  }

  draw(d){
    let s = {
      position: 'absolute',
      left:(d.x - 25) + 'px',
      top:(d.y - 25) + 'px',
      width: '50px',
      height: '50px',
      backgroundColor: '#66f3',
    };
    return <div style={s}></div>;
  }

  render(){
    return <div>
      <h1>React</h1>
      <h2 style={this.msgsStyle}>show rect.</h2>
      <div style={this.area} onClick={this.doAction}>
        {this.data.map((value) => this.draw(value))}
      </div>
      </div>;
  }
}

export default App;
