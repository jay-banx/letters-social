/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { Comment } from "../../components";

const style = {
  width: "100%",
};

const CommentList = ({ comments }) => {
  return (
    <div css={style}>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

CommentList.propTypes = {};

CommentList.defaultProps = {};

export default CommentList;
