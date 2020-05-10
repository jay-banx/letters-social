/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";

import { withService } from "../../hocs";

const style = {
  backgroundColor: "white",
  marginBottom: 10,
};

const CreatePost = ({ onCreatePost, createPost }) => {
  const [text, setText] = useState("");

  const onPost = (event) => {
    event.preventDefault();
    createPost({
      userId: 0, // Fix it
      content: text,
      location: null,
    }).then(onCreatePost); // Add catch
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

const mapMethodsToProps = (service) => ({
  createPost: service.createPost,
});

export default withService(mapMethodsToProps)(CreatePost);
