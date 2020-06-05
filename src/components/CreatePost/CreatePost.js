/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { compose } from "../../utils";

import { withService, withAuthUser } from "../../hocs";

const style = {
  backgroundColor: "white",
  marginBottom: 10,
  "& > form": {
    display: "flex",
  },
  "& > form > input": {
    width: "100%",
    padding: 10,
    border: "none",
  },
  "& > form > button": {
    border: "none",
    cursor: "pointer",
  },
};

const CreatePost = ({ onCreatePost, createPost, authUser }) => {
  const [content, setContent] = useState("");

  const onPost = (event) => {
    event.preventDefault();
    createPost({
      userId: authUser.uid,
      content,
    }).then(onCreatePost); // Add catch
    setContent("");
  };

  return (
    <div css={style}>
      <form onSubmit={onPost}>
        <input
          type="text"
          placeholder="What's on your mind?"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

CreatePost.propTypes = {};

CreatePost.defaultProps = {};

const mapMethodsToProps = (service) => ({
  createPost: service.createPost,
});

export default compose(
  withService(mapMethodsToProps),
  withAuthUser
)(CreatePost);
