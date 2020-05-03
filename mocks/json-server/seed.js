const faker = require("faker/locale/en_US");
const random = require("lodash/random");
const fs = require("fs");
const path = require("path");

const dbFile = path.join(__dirname, "./db.json");
const usersFile = path.join(__dirname, "./users.json");

let db = {
  users: [],
  posts: [],
  comments: [],
  likes: [],
};

let usersDB = {
  users: [],
};

for (let i = 0; i < 3; i++) {
  let user = {
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: random(18, 70),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
  };
  let userPassword = {
    id: i,
    email: user.email,
    password: faker.internet.password(),
  };
  db.users.push(user);
  usersDB.users.push(userPassword);
}

for (let i = 0; i < 3; i++) {
  db.posts.push({
    id: i,
    userId: i,
    date: faker.date.recent(),
    content: faker.random.words(20),
    location: null,
  });
}

for (let i = 0; i < 3; i++) {
  db.comments.push({
    id: i,
    userId: i,
    date: faker.date.recent(),
    content: faker.random.words(20),
    postId: 0,
  });
}

for (let i = 0; i < 3; i++) {
  db.likes.push({
    id: i,
    userId: i,
    postId: 0,
  });
}

const onErr = (err) => {
  err ? console.error(err) : console.log("done");
};

console.log(`Writing to ${dbFile}`);
fs.writeFile(`${dbFile}`, JSON.stringify(db), onErr);

console.log(`Writing to ${usersFile}`);
fs.writeFile(`${usersFile}`, JSON.stringify(usersDB), onErr);
