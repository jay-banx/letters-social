/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { PostHeader, PostFooter } from "../../components";

const style = {
  backgroundColor: "white",
  marginBottom: 10,
};

const Post = ({ post }) => {
  const { id, userId, createdAt, content, location } = post;

  return (
    <div css={style}>
      <PostHeader userId={userId} createdAt={createdAt} />
      <div>{content}</div>
      <div>{location}</div>
      <PostFooter postId={id} />
    </div>
  );
};

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
