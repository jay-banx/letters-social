const fs = require("fs");
const faker = require("faker/locale/en_US");
const random = require("lodash/random");

const dbFile = `${__dirname}/db.json`;

let db = {
  users: [],
  posts: [],
  comments: [],
  likes: [],
};

for (let i = 0; i < 3; i++) {
  db.users.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    age: random(18, 70),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    avatar: faker.internet.avatar(),
  });
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

console.log(`Writing to ${dbFile}`);
fs.writeFile(`${dbFile}`, JSON.stringify(db), (err) => {
  err ? console.error(err) : console.log("done");
});
