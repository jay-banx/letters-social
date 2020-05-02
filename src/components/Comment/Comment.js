/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { CommentHeader } from "../../components";

const style = {};

const Comment = ({ comment }) => {
  const { userId, date, content } = comment;

  return (
    <div css={style}>
      <CommentHeader userId={userId} date={date} />
      <div>{content}</div>
    </div>
  );
};

Comment.propTypes = {};

Comment.defaultProps = {};

export default Comment;
