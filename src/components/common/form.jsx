import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // const username = this.username.current.value;
    // console.log(`Form Submitted with ${username}`);
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  renderButton = (label, iconClass) => {
    return (
      <button
        className='btn btn-warning badge-pill'
        disabled={this.validate()}
        style={{
          fontWeight: "bold",
        }}
      >
        {label} <i className={iconClass}></i>
      </button>
    );
  };
  renderInput = (autofocus, name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        autoFocus={autofocus}
        type={type}
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
      />
    );
  };
  renderSelect = (name, label, options) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
