import React, { Component } from 'react';
import NAV from "./Component/NAV"
import './App.css';
import DASH from './Component/DASH_CONTENT/DASH';
import DASH_NAV from './Component/DASH_CONTENT/DASH_NAV'

class App extends Component {
  render() {
    return (
      <div>
        <NAV />
        <DASH_NAV />
        <DASH />
      </div>
    );
  }

}

export default App;
