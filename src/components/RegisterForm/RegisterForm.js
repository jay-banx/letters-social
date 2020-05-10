/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import PropTypes from "prop-types";

import { withService } from "../../hocs";
import { withRouter } from "react-router-dom";
import { compose } from "../../utils";

import { HOME } from "../../constants/routes";

const style = {
  "& > form > label": {
    display: "flex",
  },
};

class RegisterForm extends Component {
  initialState = {
    firstName: "",
    lastName: "",
    age: "",
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
  };

  state = { ...this.initialState };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onRegister = (event) => {
    event.preventDefault();

    const { email, passwordOne } = this.state;
    const { register, history } = this.props;

    register(email, passwordOne)
      .then(() => {
        this.setState({ ...this.initialState });
        history.push(HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const {
      firstName,
      lastName,
      age,
      username,
      email,
      passwordOne,
      passwordTwo,
    } = this.state;

    // const isInvalid =
    //   passwordOne !== passwordTwo ||
    //   passwordOne === "" ||
    //   email === "" ||
    //   username === "" ||
    //   firstName === "" ||
    //   lastName === "" ||
    //   age === "" ||
    //   username === "";

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || email === "";

    return (
      <div css={style}>
        <form action="" onSubmit={this.onRegister}>
          <label>
            First name
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={this.onChange}
              placeholder="Type your first name..."
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={this.onChange}
              placeholder="Type your last name..."
            />
          </label>
          <label>
            Age
            <input
              type="text"
              name="age"
              id="age"
              value={age}
              onChange={this.onChange}
              placeholder="Type your age..."
            />
          </label>
          <label>
            Username
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={this.onChange}
              placeholder="Type your username..."
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.onChange}
              placeholder="Type e-mail address..."
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="passwordOne"
              id="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              placeholder="Type password..."
            />
          </label>
          <label>
            Repeat password
            <input
              type="password"
              name="passwordTwo"
              id="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              placeholder="Repeat password..."
            />
          </label>
          <button disabled={isInvalid} type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};

const mapMethodsToProps = (service) => ({
  register: service.register,
});

export default compose(
  withRouter,
  withService(mapMethodsToProps)
)(RegisterForm);
