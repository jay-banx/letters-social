/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import { AUTH } from "../../constants/routes";

const style = {
  "& > button": {
    border: "none",
    backgroundColor: "transparent",
    fontSize: "15pt",
    color: "white",
    cursor: "pointer",
  },
};

const SignInButton = ({ history }) => {
  const onSignIn = () => {
    history.push(AUTH);
  };

  return (
    <div css={style}>
      <button type="button" onClick={onSignIn}>
        <i className="fa fa-sign-in" />
      </button>
    </div>
  );
};

SignInButton.propTypes = {};

SignInButton.defaultProps = {};

export default withRouter(SignInButton);
