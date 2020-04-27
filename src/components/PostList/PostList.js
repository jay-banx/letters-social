/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { Post } from "../../components";

const style = {};

const PostList = ({ posts }) => {
  return (
    <div css={style}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

PostList.defaultProps = {
  posts: [],
};

export default PostList;
