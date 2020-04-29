/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";

import { CommentContainer } from "../../components";

const style = {
  display: "flex",
  flexWrap: "wrap",
};

const PostFooter = ({ likes, comments }) => {
  const [visibleComments, setVisibleComments] = useState(false);

  return (
    <div css={style}>
      <div>{likes} likes</div>
      <div
        css={{ marginLeft: "auto" }}
        onClick={() => setVisibleComments(!visibleComments)}
      >
        {comments.length} comments
      </div>
      {visibleComments ? <CommentContainer data={comments} /> : null}
    </div>
  );
};

PostFooter.propTypes = {};

PostFooter.defaultProps = {};

export default PostFooter;
