/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";

import { withLettersService } from "../../hocs";

const style = {
  backgroundColor: "white",
  marginBottom: 10,
};

const CreateComment = ({ onCreateComment, createComment, postId }) => {
  const [text, setText] = useState("");

  const onComment = (event) => {
    event.preventDefault();
    createComment({
      userId: 0, // Fix it
      content: text,
      postId,
    }).then(onCreateComment); // Add catch
    setText("");
  };

  return (
    <div css={style}>
      <form onSubmit={onComment}>
        <input
          type="text"
          placeholder="Your comment..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

CreateComment.propTypes = {};

CreateComment.defaultProps = {};

const mapMethodsToProps = (lettersService) => ({
  createComment: lettersService.createComment,
});

export default withLettersService(mapMethodsToProps)(CreateComment);
