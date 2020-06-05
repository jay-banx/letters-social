import { POSTS_LOADED } from "../../constants/actionTypes";

const postsLoaded = (posts) => {
  return {
    type: POSTS_LOADED,
    payload: posts,
  };
};

export { postsLoaded };
