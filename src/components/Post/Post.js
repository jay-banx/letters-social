/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { PostHeader } from "../../components";

const style = {
  backgroundColor: "white",
  marginBottom: 10,
};

const Post = ({ post }) => {
  const { username, date, content, location, likes, comments } = post;

  return (
    <div css={style}>
      <PostHeader username={username} date={date} />
      <div>{content}</div>
      <div>{location}</div>
      <div>
        <div>{likes} likes</div>
        <div>{comments}</div>
      </div>
    </div>
  );
};

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
