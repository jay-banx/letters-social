/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { timeDuration } from "../../utils";

const style = {
  display: "flex",
  "& > div:last-child": {
    marginLeft: "auto",
  },
};

const PostHeader = ({ user, date }) => {
  return (
    <div css={style}>
      <img src={user.image} alt="" />
      <div>{user.username}</div>
      <div>{timeDuration(date)} ago</div>
    </div>
  );
};

PostHeader.propTypes = {};

PostHeader.defaultProps = {};

export default PostHeader;
