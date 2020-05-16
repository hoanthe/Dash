import React, { Component } from 'react';
import NAV from "./Component/NAV"
import './App.css';
import DASH from './Component/DASH_CONTENT/DASH';
import DASH_NAV from './Component/DASH_CONTENT/DASH_NAV'
import DASH_SEC from './Component/DASH_CONTENT/DASH_SEC'
import DASH_THIR from './Component/DASH_CONTENT/DASH_THIR'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      distribute: 1
    }

  }

  onChangeDistribute = (value) => {
    this.setState({
      distribute: value
    })
    console.log(value)
  }
  render() {
    let { distribute } = this.state
    let element
    switch (distribute) {
      case 1:
        element = <DASH />
        break;

      case 2:
        element = <DASH_SEC />
        break;

      case 3:
        element = <DASH_THIR />
        break;

      default:
        break;
    }
    return (
      <div>
        <NAV />
        <DASH_NAV onChangeDistribute={this.onChangeDistribute} />
        {element}
        {/* <DASH />
        <DASH_SEC />
        <DASH_THIR /> */}
      </div>
    );
  }

}

export default App;
