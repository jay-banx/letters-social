class LettersService {
  _apiBase = "http://localhost:3001";

  getResource = async (url) => {
    const res = fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }

    return await res.json();
  };

  getAllPosts = async () => {
    return this.getResource("/posts");
  };

  getPostComments = async (postId) => {
    return this.getResource(`/comments?postId=${postId}`);
  };

  getPostLikes = async (postId) => {
    return this.getResource(`/likes?postId=${postId}`);
  };

  getUser = async (userId) => {
    return this.getResource(`/users/${userId}`);
  };
}

export default LettersService;
