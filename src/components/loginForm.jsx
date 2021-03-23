import React, { Component } from "react";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }
  handleSubmit = (e) => {
    e.preventDefault();

    // call server
    const username = this.username.current.value;
    console.log(`Form Submitted with ${username}`);
  };
  handleChange = (e) => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div className='row align-items-center'>
        <div className='col'></div>
        <div
          className='col m-3'
          style={{
            border: "1px solid #243342",
            padding: "20px 60px",
            borderRadius: "10px",
          }}
        >
          <h2 className='text-info'>
            Login <i className='fa fa-user'></i>
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group mt-4'>
              <label htmlFor='username'>Username</label>
              <input
                autoFocus
                ref={this.username}
                type='text'
                id='username'
                className='form-control'
                value={account.username}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='text' id='password' className='form-control' />
            </div>
            <div className='text-center'>
              <button className='btn btn-warning'>
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
