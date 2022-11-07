import React from "react";
import '../css/bootstrap.css'
import logo from '../images/logo-ct.png'
import '../css/material-dashboard.css'

function Sidebar() {
  return (
    <div>
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
        <div className="baju sidenav-header">
          <a className="navbar-brand m-0" target="_blank">
            <img src={logo}
              className="navbar-brand-img"
              alt="main_logo" />
            <span className="ms-1 font-weight-bold text-white">AgriChain</span>
          </a>
        </div>
        <hr className="horizontal light mt-0 mb-2" />
        <div
          className="collapse navbar-collapse  w-auto  max-height-vh-100"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link text-white active bg-gradient-success"
                href="{% url 'farmerhome' %}"
              >
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="baju ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Features
              </h6>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="{% url 'cropPredict' %}">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Crop Price Predictor</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="{% url 'recommend' %}">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1">Recommendations</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
