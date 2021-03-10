import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-warning h2'>
        <a className='navbar-brand' href='#'>
          <img
            className='mr-2'
            src='in_logo.png'
            alt=''
            style={{
              width: "35px",
              height: "35px",
            }}
          />
          zar ilahi
        </a>
      </nav>
    );
  }
}

export default Navbar;
