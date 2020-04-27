/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";

const style = {
  backgroundColor: "white",
  marginBottom: 10,
};

const CreatePost = ({ onCreatePost }) => {
  const [text, setText] = useState("");

  const onPost = (event) => {
    event.preventDefault();
    onCreatePost({
      id: Date.now(),
      username: "Lorry",
      date: Date.now(),
      content: text,
      location: null,
      likes: 0,
      comments: [],
    });
    setText("");
  };

  return (
    <div css={style}>
      <form onSubmit={onPost}>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Post</button>
        <a href="/#">Add location</a>
      </form>
    </div>
  );
};

CreatePost.propTypes = {};

CreatePost.defaultProps = {};

export default CreatePost;
