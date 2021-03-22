import React, { Component } from "react";
class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' id='username' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' className='form-control' />
          </div>
          <button className='btn btn-info'>Save</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
