/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { compose } from "../../utils";
import orderBy from "lodash/orderBy";

import { withLettersService, withData } from "../../hocs";

import { PostList, CreatePost } from "../../components";

const style = {};

const PostContainer = ({ data }) => {
  const [posts, setPosts] = useState(orderBy(data, "date", "desc"));

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
  getData: lettersService.getAllPosts,
});

export default compose(
  withLettersService(mapMethodsToProps),
  withData
)(PostContainer);
