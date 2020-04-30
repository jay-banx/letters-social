const { resolve, extend } = require("json-schema-faker");
const fs = require("fs");
extend("faker", () => {
  let faker = require("faker");
  faker.locale = "en"; // or any other language
  return faker;
});
const schema = require("./schema");

resolve(schema).then((sample) => {
  console.log("Writing to db.json");
  fs.writeFile(
    `${__dirname}/../json-server/db.json`,
    JSON.stringify(sample),
    function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("done");
      }
    }
  );
});
