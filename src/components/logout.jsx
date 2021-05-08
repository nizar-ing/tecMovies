import React, { Component } from "react";
import Auth from "../services/authService";
class Logout extends Component {
  componentDidMount() {
    Auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
