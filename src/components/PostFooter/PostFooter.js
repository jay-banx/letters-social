/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";

import { CommentContainer } from "../../components";

const style = {
  display: "flex",
  flexWrap: "wrap",
  marginTop: 10,
};

const PostFooter = ({ postId }) => {
  const [visibleComments, setVisibleComments] = useState(false);

  return (
    <div css={style}>
      <div>like</div>
      <div
        css={{ marginLeft: "auto" }}
        onClick={() => setVisibleComments(!visibleComments)}
      >
        comments
      </div>
      {visibleComments ? <CommentContainer postId={postId} /> : null}
    </div>
  );
};

PostFooter.propTypes = {};

PostFooter.defaultProps = {};

export default PostFooter;
