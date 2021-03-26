import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }
  validate = () => {
    // const { errors } = this.state;
    // const { account } = this.state;
    // if (account.password.trim() === "")
    //   errors.password = "Password is required";
    // if (account.username.trim() === "")
    //   errors.username = "Username is required";
    // return Object.keys(errors).length === 0 ? null : errors;
  };
  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();

    // call server
    // const username = this.username.current.value;
    // console.log(`Form Submitted with ${username}`);
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("form submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div className='row align-items-center'>
        <div className='col'></div>
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
            <Input
              autoFocus={true}
              type='text'
              name='username'
              label='Username'
              value={account.username}
              error={errors.username}
              onChange={this.handleChange}
            />
            <Input
              type='password'
              name='password'
              label='Password'
              value={account.password}
              error={errors.password}
              onChange={this.handleChange}
            />
            <div className='text-center'>
              <button
                className='btn btn-warning badge-pill'
                style={{
                  fontWeight: "bold",
                }}
              >
                Connection <i className='fa fa-sign-in'></i>
              </button>
            </div>
          </form>
        </div>
        <div className='col'></div>
      </div>
    );
  }
}

export default LoginForm;
