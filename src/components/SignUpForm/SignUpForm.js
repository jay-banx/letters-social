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
    marginBottom: 5,
  },
  "& > form > input": {
    display: "flex",
    padding: 5,
    marginBottom: 10,
  },
  "& > form > button": {
    display: "flex",
  },
};

class SignUpForm extends Component {
  initialState = {
    firstName: "",
    lastName: "",
    age: "",
    username: "",
    avatar: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
  };

  state = { ...this.initialState };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSignUp = (event) => {
    event.preventDefault();

    const { signUp, createUser, history } = this.props;
    const {
      firstName,
      lastName,
      age,
      username,
      avatar,
      email,
      passwordOne,
    } = this.state;

    signUp(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firestore
        return createUser(authUser.user.uid, {
          firstName,
          lastName,
          age,
          username,
          avatar,
        });
      })
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
      avatar,
      email,
      passwordOne,
      passwordTwo,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "" ||
      avatar === "" ||
      firstName === "" ||
      lastName === "" ||
      age === "" ||
      username === "";

    return (
      <div css={style}>
        <form action="" onSubmit={this.onSignUp}>
          <label for="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={this.onChange}
            placeholder="Type your first name..."
          />

          <label for="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={this.onChange}
            placeholder="Type your last name..."
          />

          <label for="age">Age</label>
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            onChange={this.onChange}
            placeholder="Type your age..."
          />

          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={this.onChange}
            placeholder="Type your username..."
          />

          <label for="avatar">Avatar</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            value={avatar}
            onChange={this.onChange}
            placeholder="Type avatar url..."
          />

          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.onChange}
            placeholder="Type e-mail address..."
          />

          <label for="passwordOne">Password</label>
          <input
            type="password"
            name="passwordOne"
            id="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            placeholder="Type password..."
          />

          <label for="passwordTwo">Repeat password</label>
          <input
            type="password"
            name="passwordTwo"
            id="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            placeholder="Repeat password..."
          />

          <button disabled={isInvalid} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {};

SignUpForm.defaultProps = {};

const mapMethodsToProps = (service) => ({
  signUp: service.signUp,
  createUser: service.createUser,
});

export default compose(withRouter, withService(mapMethodsToProps))(SignUpForm);
