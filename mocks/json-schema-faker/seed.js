const jsf = require("json-schema-faker");
const fs = require("fs");
const faker = require("faker/locale/en_US");
const schema = require("./schema");

jsf.extend("faker", () => faker);
jsf.format("recentDate", () => faker.date.recent().toISOString());

jsf.resolve(schema).then((sample) => {
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
