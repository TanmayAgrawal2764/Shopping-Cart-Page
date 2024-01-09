import React from "react";
import "./index.css";
function Navbar(props) {
  return (
    <header className="App-header">
      <nav id="main-navbar" className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          CartPage
        </a>
        <button className="btn btn-primary">
          <i className="fas fa-shopping-cart"></i> Cart
          <span className="badge badge-light ml-1">{props.total}</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
