/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import { compose } from "../../utils";
import { withService } from "../../hocs";
import { HOME } from "../../constants/routes";

const style = {
  "& > button": {
    border: "none",
    backgroundColor: "transparent",
    fontSize: "15pt",
    color: "white",
    cursor: "pointer",
  },
};

const SignOutButton = ({ signOut, history }) => {
  const onSignOut = () => {
    signOut();
    history.push(HOME);
  };

  return (
    <div css={style}>
      <button type="button" onClick={onSignOut}>
        <i className="fa fa-sign-out" />
      </button>
    </div>
  );
};

SignOutButton.propTypes = {};

SignOutButton.defaultProps = {};

const mapMethodsToProps = (service) => ({
  signOut: service.signOut,
});

export default compose(
  withRouter,
  withService(mapMethodsToProps)
)(SignOutButton);
