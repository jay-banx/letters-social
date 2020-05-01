/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { timeDuration } from "../../utils";

import { UserInfo } from "../../components";

const style = {};

const Comment = ({ comment }) => {
  const { userId, date, content } = comment;

  return (
    <div css={style}>
      <UserInfo userId={userId} />
      <div>{timeDuration(date)} ago</div>
      <div>{content}</div>
    </div>
  );
};

Comment.propTypes = {};

Comment.defaultProps = {};

export default Comment;
