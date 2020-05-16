import React, { Component } from 'react'

class DASH_NAV extends Component {

  changeDistribute = (event) => {
    let target = event.target
    let value = target.value

    this.props.onChangeDistribute(value)
  }
  render() {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">


            <li name='true' value = '1' onClick={(event) => this.changeDistribute(event)}>abc1</li>

            <li onClick={(event) => this.changeDistribute(event)}>abc2</li>


            <li className="nav-item" name="home" value = '1' onClick={(event) => this.changeDistribute(event)}>
                <span data-feather="home"></span>
                  Dashboard
                  <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item" name="file" value = '2' onClick={(event) => this.changeDistribute(event)}>
                <span data-feather="file"></span>
                  Orders
            </li>
            <li className="nav-item" name="shopping" value = '3' onClick={(event) => this.changeDistribute(event)}>
                <span data-feather="shopping-cart"></span>
                  Products
            </li>
            <li className="nav-item" name="users" onClick={(event) => this.changeDistribute(event)}>
              <a className="nav-link" href=".">
                <span data-feather="users"></span>
                  Customers
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="google.com">
                <span data-feather="bar-chart-2"></span>
                  Reports
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="google.com">
                <span data-feather="layers"></span>
                  Integrations
                </a>
            </li>
          </ul>

          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a className="d-flex align-items-center text-muted" href="google.com">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <a className="nav-link" href="google.com">
                <span data-feather="file-text"></span>
                  Current month
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="google.com">
                <span data-feather="file-text"></span>
                  Last quarter
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="google.com">
                <span data-feather="file-text"></span>
                  Social engagement
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="google.com">
                <span data-feather="file-text"></span>
                  Year-end sale
                </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default DASH_NAV