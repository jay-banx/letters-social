/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { Welcome, PostContainer, AdList } from "../../components";

const style = {
  display: "grid",
  gridGap: 10,
  gridTemplateColumns: "[left] 20vw [center] 50vw [right] 20vw",
  justifyContent: "center",
};

const FeedPage = () => {
  return (
    <div css={style}>
      <Welcome />
      <PostContainer />
      <AdList />
    </div>
  );
};

FeedPage.propTypes = {};

FeedPage.defaultProps = {};

export default FeedPage;
