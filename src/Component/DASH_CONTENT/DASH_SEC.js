import React, { Component } from 'react'
import DASH_HEADER from './DASH_HEADER'
// import DASH_TABLE from './DASH_TABLE'
import MultipleAxisChart from './Multiple Axis Chart'
import StackedAreaChart from './Stacked Area Chart'
import PieChartWithCustomization from './Pie Chart with Customization'

class DASH extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <main className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
            <DASH_HEADER children='DASHBOARD2'/>

            
            <div className="card-columns row">
              <div className="card col-xs-3 col-lg-3 col-sm-6 box ">
                <img className="card-img-top" src="holder.js/100x180/" alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-6 box">
                <img className="card-img-top" src="holder.js/100x180/" alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-6 box">
                <img className="card-img-top" src="holder.js/100x180/" alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div>
              <div className="card col-lg-3 col-sm-6 box">
                <img className="card-img-top" src="holder.js/100x180/" alt=""/>
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="card-text">Text</p>
                </div>
              </div>
            </div>
            <StackedAreaChart />
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <PieChartWithCustomization />
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <MultipleAxisChart />

              </div>
            </div>

          </main>
        </div>
      </div >
    )
  }
}

export default DASH