/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { compose } from "../../utils";

import { withLettersService, withData } from "../../hocs";

import { CommentList, CreateComment } from "../../components";

const style = {
  width: "100%",
};

const CommentContainer = ({ data }) => {
  const [comments, setComments] = useState(data);
  return (
    <div css={style}>
      <CreateComment
        onCreateComment={(newComment) => setComments([newComment, ...comments])}
      />
      <CommentList comments={comments} />
    </div>
  );
};

CommentContainer.propTypes = {};

CommentContainer.defaultProps = {};

const mapMethodsToProps = (lettersService, props) => ({
  getData: () => lettersService.getPostComments(props.postId),
});

export default compose(
  withLettersService(mapMethodsToProps),
  withData
)(CommentContainer);
