/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { timeDuration } from "../../utils";

const style = {};

const Comment = ({ comment }) => {
  const { username, date, content, likes } = comment;

  return (
    <div css={style}>
      <div>{username}</div>
      <div>{timeDuration(date)} ago</div>
      <div>{content}</div>
      <div>{likes} likes</div>
    </div>
  );
};

Comment.propTypes = {};

Comment.defaultProps = {};

export default Comment;
