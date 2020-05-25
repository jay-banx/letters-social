/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { compose } from "../../utils";

import { withService, withData } from "../../hocs";

import { CommentList, CreateComment } from "../../components";

const style = {
  width: "100%",
};

const CommentContainer = ({ data, postId }) => {
  const [comments, setComments] = useState(data);
  return (
    <div css={style}>
      <CreateComment
        postId={postId}
        onCreateComment={(newComment) => setComments([newComment, ...comments])}
      />
      <CommentList comments={comments} />
    </div>
  );
};

CommentContainer.propTypes = {};

CommentContainer.defaultProps = {};

const mapMethodsToProps = (service, props) => ({
  getData: () => service.getComments(props.postId),
});

export default compose(
  withService(mapMethodsToProps),
  withData
)(CommentContainer);
