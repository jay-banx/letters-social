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

class LoginForm extends Component {
  initialState = {
    email: "",
    password: "",
    error: null,
  };

  state = { ...this.initialState };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onLogin = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const { login, history } = this.props;

    login(email, password)
      .then(() => {
        this.setState({ ...this.initialState });
        history.push(HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { email, password } = this.state;

    const isInvalid = email === "" || password === "";

    return (
      <div css={style}>
        <form action="" onSubmit={this.onLogin}>
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
              name="password"
              id="password"
              value={password}
              onChange={this.onChange}
              placeholder="Type password..."
            />
          </label>
          <button disabled={isInvalid} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

const mapMethodsToProps = (service) => ({
  login: service.login,
});

export default compose(withRouter, withService(mapMethodsToProps))(LoginForm);
