import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    //call the server
    console.log("form submitted");
  };

  render() {
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
            Register <i className='fa fa-user-plus'></i>
          </h2>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput(true, "username", "Username")}
            {this.renderInput(false, "password", "Password", "password")}
            {this.renderInput(false, "name", "Name")}
            <div className='text-center'>
              {this.renderButton("Register", "fa fa-user-plus")}
            </div>
          </form>
        </div>
        <div className='col-3'></div>
      </div>
    );
  }
}

export default RegisterForm;
