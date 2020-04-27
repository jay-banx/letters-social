/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";

import { PostList, CreatePost } from "../../components";

const style = {};

const PostContainer = (props) => {
  const initPosts = [
    {
      id: 0,
      username: "Denis",
      date: 1587990994977,
      content: "hello",
      location: null,
      likes: 0,
      comments: [
        {
          id: 0,
          username: "Robert",
          date: 1587990994977,
          content: "uuuu",
          likes: 0,
        },
        {
          id: 1,
          username: "Hugo",
          date: 1587990994977,
          content: "ffff",
          likes: 0,
        },
      ],
    },
    {
      id: 1,
      username: "Anna",
      date: 1587990094977,
      content: "world",
      location: null,
      likes: 5,
      comments: [],
    },
  ];

  const [posts, setPosts] = useState(initPosts);

  return (
    <div css={style}>
      <CreatePost onCreatePost={(newPost) => setPosts([newPost, ...posts])} />
      <PostList posts={posts} />
    </div>
  );
};

PostContainer.propTypes = {};

PostContainer.defaultProps = {};

export default PostContainer;
