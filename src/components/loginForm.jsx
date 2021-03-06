import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import Auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  doSubmit = async () => {
    //call the server
    try {
      const { data } = this.state;
      await Auth.login(data.username, data.password);
      //this.props.history.push("/");
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (e) {
      if (e.response && e.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = e.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (Auth.getCurrentUser()) return <Redirect to='/' />;
    return (
      <div className='row align-items-center'>
        <div className='col-3'></div>
        <div
          className='col m-3'
          style={{
            border: "3px solid #243342",
            padding: "20px 60px",
            borderRadius: "10px",
            backgroundColor: "#E0E0E0",
          }}
        >
          <h2 className='text-info'>
            Login <i className='fa fa-user'></i>
          </h2>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput(true, "username", "Username")}
            {this.renderInput(false, "password", "Password", "password")}
            <div className='text-center'>
              {this.renderButton("Connection", "fa fa-sign-in")}
            </div>
          </form>
        </div>
        <div className='col-3'></div>
      </div>
    );
  }
}

export default LoginForm;
