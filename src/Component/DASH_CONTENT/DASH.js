import React, { Component } from 'react'
import DASH_HEADER from './DASH_HEADER'
import DASH_TABLE from './DASH_TABLE'

class DASH extends Component {
  render() {
    return (
        <div className="container-fluid">
          <div className="row">
            <main  className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
              <DASH_HEADER />
              <canvas className="my-4" id="myChart" width="900" height="380"></canvas>
              <h2>Section title</h2>
              <DASH_TABLE />
            </main>
          </div>
        </div>
    )
  }
}

export default DASH