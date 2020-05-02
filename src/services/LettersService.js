class LettersService {
  _apiBase = "http://localhost:3001";
  _sortByDate = "_sort=date&_order=desc";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }

    return await res.json();
  };

  createResource = async (url, resource) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(resource),
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }

    return await res.json();
  };

  getAllPosts = async () => {
    return this.getResource(`/posts?${this._sortByDate}`);
  };

  getPostComments = async (postId) => {
    return this.getResource(`/comments?postId=${postId}&${this._sortByDate}`);
  };

  getPostLikes = async (postId) => {
    return this.getResource(`/likes?postId=${postId}`);
  };

  getUser = async (userId) => {
    return this.getResource(`/users/${userId}`);
  };

  createPost = async (post) => {
    return this.createResource("/posts", post);
  };

  createComment = async (comment) => {
    return this.createResource("/comments", comment);
  };

  createLike = async (like) => {
    return this.createResource("/likes", like);
  };

  createUser = async (user) => {
    return this.createResource("/users", user);
  };
}

export default LettersService;
