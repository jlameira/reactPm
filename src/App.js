import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    const name = "Jonathan";
    return (
      <div className="App">
         <div id="c1" class="no"></div>
         <div id="c2">
                <div id="divMsg"></div>
                <div id="redirecMsg"></div>
                <div id="spa"></div>
            </div>
      </div>
    );
  }
}

export default App;
