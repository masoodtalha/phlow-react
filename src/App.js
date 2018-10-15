import React, { Component } from 'react';
import CustomComponent from './library/customComponent';

class App extends CustomComponent {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Create a link here that calls up the other component with the props
          </p>
        </header>
      </div>
    );
  }
}

export default App;
