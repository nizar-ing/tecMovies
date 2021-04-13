import React from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";
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

  doSubmit = () => {
    //call the server
    console.log("form submitted");
  };

  render() {
    const { data, errors } = this.state;
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
              value={data.username}
              error={errors.username}
              onChange={this.handleChange}
            />
            <Input
              type='password'
              name='password'
              label='Password'
              value={data.password}
              error={errors.password}
              onChange={this.handleChange}
            />
            <div className='text-center'>
              <button
                className='btn btn-warning badge-pill'
                disabled={this.validate()}
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
