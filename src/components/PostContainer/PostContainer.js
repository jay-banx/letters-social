/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { withLettersService } from "../../hocs";

import { PostList, CreatePost } from "../../components";

const style = {};

const PostContainer = ({ getAllPosts }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((res) => setPosts(res));
  }, []);

  return (
    <div css={style}>
      <CreatePost onCreatePost={(newPost) => setPosts([newPost, ...posts])} />
      <PostList posts={posts} />
    </div>
  );
};

PostContainer.propTypes = {};

PostContainer.defaultProps = {};

const mapMethodsToProps = (lettersService) => ({
  getAllPosts: lettersService.getAllPosts,
});

export default withLettersService(mapMethodsToProps)(PostContainer);
