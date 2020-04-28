/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { PostHeader, PostFooter } from "../../components";

const style = {
  backgroundColor: "white",
  marginBottom: 10,
};

const Post = ({ post }) => {
  const { user, date, content, location, likes, comments } = post;

  return (
    <div css={style}>
      <PostHeader user={user} date={date} />
      <div>{content}</div>
      <div>{location}</div>
      <PostFooter likes={likes} comments={comments} />
    </div>
  );
};

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
