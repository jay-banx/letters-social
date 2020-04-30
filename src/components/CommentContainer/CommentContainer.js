/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";

import { CommentList, CreateComment } from "../../components";

const style = {
  width: "100%",
};

const CommentContainer = ({ data }) => {
  const [comments, setComments] = useState(data);

  return (
    <div css={style}>
      <CreateComment
        onCreateComment={(newComment) => setComments([newComment, ...comments])}
      />
      <CommentList comments={comments} />
    </div>
  );
};

CommentContainer.propTypes = {};

CommentContainer.defaultProps = {};

export default CommentContainer;
