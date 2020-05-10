/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { compose } from "../../utils";

import { withService, withData } from "../../hocs";

import { PostList, CreatePost } from "../../components";

const style = {};

const PostContainer = ({ data }) => {
  const [posts, setPosts] = useState(data);

  return (
    <div css={style}>
      <CreatePost onCreatePost={(newPost) => setPosts([newPost, ...posts])} />
      <PostList posts={posts} />
    </div>
  );
};

PostContainer.propTypes = {};

PostContainer.defaultProps = {};

const mapMethodsToProps = (service) => ({
  getData: service.getAllPosts,
});

export default compose(withService(mapMethodsToProps), withData)(PostContainer);
