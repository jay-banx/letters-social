/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import { LoginForm, RegisterForm } from "../../components";

const style = {};

const AuthPage = () => {
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

export default AuthPage;
