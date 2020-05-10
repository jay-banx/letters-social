/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { withService } from "../../hocs";

const style = {};

const LogoutButton = ({ logout }) => {
  return (
    <div css={style}>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

LogoutButton.propTypes = {};

LogoutButton.defaultProps = {};

const mapMethodsToProps = (service) => ({
  logout: service.logout,
});

export default withService(mapMethodsToProps)(LogoutButton);
