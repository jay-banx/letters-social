/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { Welcome } from "../../components";

const style = {
  display: "grid",
  gridTemplateColumns: "calc(90vw + 20px)",
  justifyContent: "center",
};

const HomePage = () => {
  return (
    <div css={style}>
      <Welcome />
    </div>
  );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
