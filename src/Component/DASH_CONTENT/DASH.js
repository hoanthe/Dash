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
            <DASH_HEADER />

            
            <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
              
            </div>
            
              
            <div class="card-columns row">
              <div class="card col-xs-3 col-lg-3 col-sm-6 box ">
                <img class="card-img-top" src="holder.js/100x180/" alt=""/>
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Text</p>
                </div>
              </div>
              <div class="card col-lg-3 col-sm-6 box">
                <img class="card-img-top" src="holder.js/100x180/" alt=""/>
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Text</p>
                </div>
              </div>
              <div class="card col-lg-3 col-sm-6 box">
                <img class="card-img-top" src="holder.js/100x180/" alt=""/>
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Text</p>
                </div>
              </div>
              <div class="card col-lg-3 col-sm-6 box">
                <img class="card-img-top" src="holder.js/100x180/" alt=""/>
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Text</p>
                </div>
              </div>
            </div>
            <StackedAreaChart />
            <div className="row">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <PieChartWithCustomization />
              </div>

              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
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