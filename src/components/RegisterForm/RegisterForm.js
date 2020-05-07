/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { withLettersService } from "../../hocs";

const style = {};

const RegisterForm = ({ register }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(18);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = (event) => {
    event.preventDefault();
    register(email, password);
    setFirstName("");
    setLastName("");
    setAge(18);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div css={style}>
      <form action="" onSubmit={onRegister}>
        <label>
          First name
          <input
            type="firstName"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Last name
          <input
            type="lastName"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Age
          <input
            type="age"
            name="age"
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <br />
        <label>
          Username
          <input
            type="username"
            name="username"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
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
        <input type="submit" value="Sing up" />
      </form>
    </div>
  );
};

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};

const mapMethodsToProps = (lettersService) => ({
  register: lettersService.register,
});

export default withLettersService(mapMethodsToProps)(RegisterForm);
