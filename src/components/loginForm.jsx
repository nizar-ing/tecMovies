import React, { Component } from "react";
class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    // call server
    console.log("Form Submitted");
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' className='form-control' />
          </div>
          <button className='btn btn-warning'>
            Connection <i className='fa fa-sign-in'></i>
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
