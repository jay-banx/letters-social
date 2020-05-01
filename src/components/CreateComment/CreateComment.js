/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";

const style = {
  backgroundColor: "white",
  marginBottom: 10,
};

const CreateComment = ({ onCreateComment }) => {
  const [text, setText] = useState("");

  const onComment = (event) => {
    event.preventDefault();
    onCreateComment({
      id: Date.now(), // Fix it
      userId: 0, // Fix it
      date: Date.now(), // Fix it
      content: text,
      postId: 0, // Fix it
    });
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

export default CreateComment;
