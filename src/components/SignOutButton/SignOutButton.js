/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { withService } from "../../hocs";

const style = {};

const SignOutButton = ({ signOut }) => {
  return (
    <div css={style}>
      <button type="button" onClick={signOut}>
        SignOut
      </button>
    </div>
  );
};

SignOutButton.propTypes = {};

SignOutButton.defaultProps = {};

const mapMethodsToProps = (service) => ({
  signOut: service.signOut,
});

export default withService(mapMethodsToProps)(SignOutButton);
