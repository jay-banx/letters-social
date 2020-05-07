class LettersService {
  _apiBase = "http://localhost:3001";
  _sortByDate = "_sort=date&_order=desc";

  getToken = () => {
    return localStorage.getItem("accessToken");
  };

  setToken = (token) => {
    return localStorage.setItem("accessToken", token);
  };

  login = async (email, password) => {
    const res = await fetch(`${this._apiBase}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error(
        `Could not fetch /auth/login, recieved ${res.status}, ${res.message}`
      );
    }

    res.json().then((result) => this.setToken(result.accessToken));
  };

  register = async (email, password) => {
    const res = await fetch(`${this._apiBase}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error(
        `Could not fetch /auth/register, recieved ${res.status}, ${res.message}`
      );
    }

    res.json().then((result) => this.setToken(result.accessToken));
  };

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + this.getToken(),
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }

    return await res.json();
  };

  postResource = async (url, resource) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + this.getToken(),
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
    return this.postResource("/posts", post);
  };

  createComment = async (comment) => {
    return this.postResource("/comments", comment);
  };

  createLike = async (like) => {
    return this.postResource("/likes", like);
  };

  createUser = async (user) => {
    return this.postResource("/users", user);
  };
}

export default LettersService;
