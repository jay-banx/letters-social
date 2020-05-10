/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { withService } from "../../hocs";

const style = {};

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (event) => {
    event.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div css={style}>
      <form action="" onSubmit={onLogin}>
        <label>
          Email
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Sing in" />
      </form>
    </div>
  );
};

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

const mapMethodsToProps = (service) => ({
  login: service.login,
});

export default withService(mapMethodsToProps)(LoginForm);
