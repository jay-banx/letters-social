/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { Profile } from "../../components";

const style = {
  display: "grid",
  gridTemplateColumns: "calc(90vw + 20px)",
  justifyContent: "center",
};

const ProfilePage = () => {
  return (
    <div css={style}>
      <Profile />
    </div>
  );
};

ProfilePage.propTypes = {};

ProfilePage.defaultProps = {};

export default ProfilePage;
