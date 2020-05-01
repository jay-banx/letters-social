/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { timeDuration } from "../../utils";
import { UserInfo } from "../../components";

const style = {
  display: "flex",
  "& > div:last-child": {
    marginLeft: "auto",
  },
};

const PostHeader = ({ userId, date }) => {
  return (
    <div css={style}>
      <UserInfo userId={userId} />
      <div>{timeDuration(date)} ago</div>
    </div>
  );
};

PostHeader.propTypes = {};

PostHeader.defaultProps = {};

export default PostHeader;
