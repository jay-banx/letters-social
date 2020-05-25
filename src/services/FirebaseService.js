import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
    this.db = app.firestore();
  }

  // *** Auth API ***

  signUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  // *** Firestore API ***

  getUser = (userId) =>
    this.db.collection("users").doc(userId).get().then(this.mapDoc);

  getPosts = () => this.db.collection("posts").get().then(this.mapMessages);

  getComments = (postId) =>
    this.db
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .get()
      .then(this.mapMessages);

  getLikes = (postId) =>
    this.db
      .collection("posts")
      .doc(postId)
      .collection("likes")
      .get()
      .then(this.mapSnapshot);

  createUser = (userId, user) =>
    this.db.collection("users").doc(userId).set(user);

  createPost = (post) => this.db.collection("posts").add(post);

  createComment = (comment, postId) =>
    this.db.collection("posts").doc(postId).collection("comments").add(comment);

  createLike = (like, postId) =>
    this.db.collection("posts").doc(postId).collection("likes").add(like);

  mapDoc = (doc) => ({
    id: doc.id,
    ...doc.data(),
  });

  mapSnapshot = (snapshot) => snapshot.docs.map(this.mapDoc);

  mapMessage = (message) => ({
    id: message.id,
    ...message.data(),
    createdAt: message.data().createdAt.toDate(),
  });

  mapMessages = (snapshot) => snapshot.docs.map(this.mapMessage);
}

export default FirebaseService;
