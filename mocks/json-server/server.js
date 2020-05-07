const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const dbFile = path.join(__dirname, "./db.json");
const usersFile = path.join(__dirname, "./users.json");

const server = jsonServer.create();
const router = jsonServer.router(dbFile);
const usersDB = JSON.parse(fs.readFileSync(usersFile, "UTF-8"));

const middlewares = jsonServer.defaults();

const SECRET_KEY = "123456789";

const expiresIn = "1h";

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return (
    usersDB.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}

server.use(jsonServer.bodyParser);

// Register New User
server.post("/auth/register", (req, res) => {
  console.log("register endpoint called; request body:");
  console.log(req.body);
  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === true) {
    const status = 401;
    const message = "Email and Password already exist";
    res.status(status).json({ status, message });
    return;
  }

  fs.readFile(usersFile, (err, usersData) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    // Get current users data
    let data = JSON.parse(usersData.toString());

    // Get the id of last user
    const lastItemId = data.users[data.users.length - 1].id;

    //Add new user
    data.users.push({ id: lastItemId + 1, email, password }); //add some data
    fs.writeFile(usersFile, JSON.stringify(data), (err, result) => {
      // WRITE
      if (err) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
        return;
      }
    });
  });

  // Create token for new user
  const accessToken = createToken({ email, password });
  console.log("Access Token:" + accessToken);
  res.status(200).json({ accessToken });
});

// Login to one of the users from ./users.json
server.post("/auth/login", (req, res) => {
  console.log("login endpoint called; request body:");
  console.log(req.body);
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = "Incorrect email or password";
    res.status(status).json({ status, message });
    return;
  }
  const accessToken = createToken({ email, password });
  console.log("Access Token:" + accessToken);
  res.status(200).json({ accessToken });
});

server.post(/^(?!\/auth).*$/, (req, res, next) => {
  // ADD USE
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }
  try {
    const verifyTokenResult = verifyToken(
      req.headers.authorization.split(" ")[1]
    );

    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = "Access token not provided";
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = "Error accessToken is revoked";
    res.status(status).json({ status, message });
  }
});

// Handling new posts and comments
server.post(/^\/(posts|comments)$/, (req, res, next) => {
  req.body.id = Date.now();
  req.body.date = new Date().toISOString();
  // Continue to JSON Server router
  next();
});

server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});
