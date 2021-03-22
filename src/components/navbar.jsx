import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg  navbar-light bg-warning h6'>
        <Link className='navbar-brand' to='/'>
          <img
            className='mr-2'
            src='in_logo.png'
            alt=''
            style={{
              width: "35px",
              height: "35px",
            }}
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink className='nav-item nav-link' to='/movies'>
              Movies
            </NavLink>
            <NavLink className='nav-item nav-link' to='/customers'>
              Customers
            </NavLink>
            <NavLink className='nav-item nav-link' to='/rentals'>
              Rentals
            </NavLink>
            <NavLink className='nav-item nav-link' to='/login'>
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
