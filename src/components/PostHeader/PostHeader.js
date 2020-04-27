/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import humanize from "humanize-duration";

const style = {
  display: "flex",
  "& > div:last-child": {
    marginLeft: "auto",
  },
};

const PostHeader = ({ username, date }) => {
  return (
    <div css={style}>
      <div>{username}</div>
      <div>
        {humanize(new Date() - new Date(date), {
          largest: 1,
          round: true,
          units: ["d", "h", "m"],
        })}{" "}
        ago
      </div>
    </div>
  );
};

PostHeader.propTypes = {};

PostHeader.defaultProps = {};

export default PostHeader;
