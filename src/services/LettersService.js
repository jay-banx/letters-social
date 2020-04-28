class LettersService {
  _posts = [
    {
      id: 0,
      user: {
        id: 0,
        username: "Denis",
        image: "https://picsum.photos/30",
      },
      date: 1587990994977,
      content: "hello",
      location: null,
      likes: 0,
      comments: [
        {
          id: 0,
          user: {
            id: 2,
            username: "Robert",
            image: "https://picsum.photos/30",
          },
          date: 1587990994977,
          content: "uuuu",
          likes: 0,
        },
        {
          id: 1,
          user: {
            id: 3,
            username: "Hugo",
            image: "https://picsum.photos/30",
          },
          date: 1587990994977,
          content: "ffff",
          likes: 0,
        },
      ],
    },
    {
      id: 1,
      user: {
        id: 1,
        username: "Anna",
        image: "https://picsum.photos/30",
      },
      date: 1587990094977,
      content: "world",
      location: null,
      likes: 5,
      comments: [],
    },
  ];

  _users = [
    {
      id: 0,
      username: "Denis",
      image: "https://picsum.photos/30",
    },
    {
      id: 1,
      username: "Anna",
      image: "https://picsum.photos/30",
    },
    {
      id: 2,
      username: "Robert",
      image: "https://picsum.photos/30",
    },
    {
      id: 3,
      username: "Hugo",
      image: "https://picsum.photos/30",
    },
  ];

  getAllPosts = async () => {
    return this._posts;
  };

  getPost = async (id) => {
    return this._posts.find((item) => item.id === id);
  };

  getAllUsers = async () => {
    return this._users;
  };

  getUser = async (id) => {
    return this._users.find((item) => item.id === id);
  };
}

export default LettersService;
