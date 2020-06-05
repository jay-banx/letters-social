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
    padding: 5,
    border: "1px solid black",
    borderRight: "none",
  },
  "& > form > button": {
    border: "1px solid black",
    cursor: "pointer",
  },
};

const CreateComment = ({
  onCreateComment,
  createComment,
  postId,
  authUser,
}) => {
  const [content, setContent] = useState("");

  const onComment = (event) => {
    event.preventDefault();
    createComment(
      {
        userId: authUser.uid,
        content,
      },
      postId
    ).then(onCreateComment); // Add catch
    setContent("");
  };

  return (
    <div css={style}>
      <form onSubmit={onComment}>
        <input
          type="text"
          placeholder="Your comment..."
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

CreateComment.propTypes = {};

CreateComment.defaultProps = {};

const mapMethodsToProps = (service) => ({
  createComment: service.createComment,
});

export default compose(
  withService(mapMethodsToProps),
  withAuthUser
)(CreateComment);
