/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { LoginForm } from "../../components";

const style = {
  display: "grid",
  gridTemplateColumns: "calc(90vw + 20px)",
  justifyContent: "center",
};

const LoginPage = () => {
  return (
    <div css={style}>
      <LoginForm />
    </div>
  );
};

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
