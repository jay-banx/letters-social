/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";

import { SignInForm, SignUpForm } from "../../components";

const style = {
  backgroundColor: "white",
  "& > div": {
    display: "flex",
    padding: 10,
  },
  "& > div > span": {
    cursor: "pointer",
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
        <span onClick={() => setVisible(true)}>Sign In</span>
        <span onClick={() => setVisible(false)}>Sign Up</span>
      </div>
      {visible ? <SignInForm /> : <SignUpForm />}
    </div>
  );
};

AuthForm.propTypes = {};

AuthForm.defaultProps = {};

export default AuthForm;
