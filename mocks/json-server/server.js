const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("mocks/json-server/db.json");
const middlewares = jsonServer.defaults();

// Handling Post
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.id = Date.now();
    req.body.date = new Date().toISOString();
  }
  // Continue to JSON Server router
  next();
});

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
