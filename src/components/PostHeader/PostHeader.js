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

const PostHeader = ({ username, date }) => {
  return (
    <div css={style}>
      <div>{username}</div>
      <div>{timeDuration(date)} ago</div>
    </div>
  );
};

PostHeader.propTypes = {};

PostHeader.defaultProps = {};

export default PostHeader;
