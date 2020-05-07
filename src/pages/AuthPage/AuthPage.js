/** @jsx jsx */
import { jsx } from "@emotion/core";

import { AuthForm } from "../../components";

const style = {
  display: "grid",
  gridTemplateColumns: "calc(50vw)",
  justifyContent: "center",
};

const AuthPage = () => {
  return (
    <div css={style}>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
