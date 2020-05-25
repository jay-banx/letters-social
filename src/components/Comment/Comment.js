/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { CommentHeader } from "../../components";

const style = {};

const Comment = ({ comment }) => {
  const { userId, createdAt, content } = comment;

  return (
    <div css={style}>
      <CommentHeader userId={userId} createdAt={createdAt} />
      <div>{content}</div>
    </div>
  );
};

Comment.propTypes = {};

Comment.defaultProps = {};

export default Comment;
