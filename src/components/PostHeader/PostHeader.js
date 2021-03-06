/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { timeDuration } from "../../utils";
import { UserInfo } from "../../components";

const style = {
  display: "flex",
  marginBottom: 10,
  "& > div:last-child": {
    marginLeft: "auto",
  },
};

const PostHeader = ({ userId, createdAt }) => {
  return (
    <div css={style}>
      <UserInfo userId={userId} />
      <div>{timeDuration(createdAt)} ago</div>
    </div>
  );
};

PostHeader.propTypes = {};

PostHeader.defaultProps = {};

export default PostHeader;
