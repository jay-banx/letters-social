/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { Ad } from "../../components";

const style = {};

const AdList = (props) => {
  return (
    <div css={style}>
      <Ad />
    </div>
  );
};

AdList.propTypes = {};

AdList.defaultProps = {};

export default AdList;
