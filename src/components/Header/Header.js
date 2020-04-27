/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const style = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "blue",
  "& > div:last-child": {
    display: "flex",
    marginLeft: "auto",
  },
};

const Header = (props) => {
  return (
    <div css={style}>
      <Link to="/">Logo</Link>
      <div>
        <div>Username</div>
        <img src="" alt="" />
        <i className="fa"></i>
      </div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
