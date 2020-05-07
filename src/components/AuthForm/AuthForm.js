/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";

import { LoginForm, RegisterForm } from "../../components";

const style = {
  backgroundColor: "white",
  "& > div": {
    display: "flex",
  },
  "& > div > span:last-child": {
    marginLeft: "auto",
  },
};

const AuthForm = (props) => {
  const [visible, setVisible] = useState(true);

  return (
    <div css={style}>
      <div>
        <span onClick={() => setVisible(true)}>Login</span>
        <span onClick={() => setVisible(false)}>Register</span>
      </div>
      {visible ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

AuthForm.propTypes = {};

AuthForm.defaultProps = {};

export default AuthForm;
