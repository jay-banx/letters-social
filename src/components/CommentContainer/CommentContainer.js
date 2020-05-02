/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useState } from "react";
import { compose } from "../../utils";
import orderBy from "lodash/orderBy";

import { withLettersService, withData } from "../../hocs";

import { CommentList, CreateComment } from "../../components";

const style = {
  width: "100%",
};

const CommentContainer = ({ data, postId }) => {
  const [comments, setComments] = useState(orderBy(data, "date", "desc"));
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

const mapMethodsToProps = (lettersService, props) => ({
  getData: () => lettersService.getPostComments(props.postId),
});

export default compose(
  withLettersService(mapMethodsToProps),
  withData
)(CommentContainer);
