import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

class FirebaseService {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  register = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  login = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  logout = () => this.auth.signOut();

  getUser = (userId) => this.db.ref(`users/${userId}`);

  getAllPosts = () => this.db.ref(`posts`);

  getPostComments = (postId) => this.db.ref(`comments/${postId}`);

  getPostLikes = (postId) => this.db.ref(`likes/${postId}`);

  createPost = (post) => this.db.ref(`posts`).set(post);

  createComment = (comment) => this.db.ref(`comments`).set(comment);

  createLike = (like) => this.db.ref(`likes`).set(like);
}

export default FirebaseService;
