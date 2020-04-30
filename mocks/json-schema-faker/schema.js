const schema = {
  type: "object",
  required: ["users", "posts", "comments", "likes"],
  properties: {
    users: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: { $ref: "#/definitions/users" },
    },
    posts: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: { $ref: "#/definitions/posts" },
    },
    comments: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: { $ref: "#/definitions/comments" },
    },
    likes: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: { $ref: "#/definitions/likes" },
    },
  },
  definitions: {
    users: {
      type: "object",
      required: [
        "id",
        "firstName",
        "lastName",
        "age",
        "email",
        "username",
        "avatar",
      ],
      properties: {
        id: {
          $ref: "#/definitions/positiveInt",
        },
        firstName: {
          type: "string",
          faker: "name.firstName",
        },
        lastName: {
          type: "string",
          faker: "name.lastName",
        },
        age: {
          type: "integer",
          maximum: 70,
          minimum: 18,
        },
        email: {
          type: "string",
          faker: "internet.email",
        },
        username: {
          type: "string",
          faker: "internet.userName",
        },
        avatar: {
          type: "string",
          faker: "internet.avatar",
        },
      },
    },
    posts: {
      type: "object",
      required: ["id", "userId", "date", "content", "location"],
      properties: {
        id: {
          $ref: "#/definitions/positiveInt",
        },
        userId: {
          $ref: "#/definitions/positiveInt",
        },
        date: {
          type: "string",
          faker: "date.past",
        },
        content: {
          type: "string",
          faker: "lorem.sentence",
        },
        location: {
          type: "null",
        },
      },
    },
    comments: {
      type: "object",
      required: ["id", "userId", "date", "content", "postId"],
      properties: {
        id: {
          $ref: "#/definitions/positiveInt",
        },
        userId: {
          $ref: "#/definitions/positiveInt",
        },
        date: {
          type: "string",
          faker: "date.past",
        },
        content: {
          type: "string",
          faker: "lorem.sentence",
        },
        postId: {
          $ref: "#/definitions/positiveInt",
        },
      },
    },
    likes: {
      type: "object",
      required: ["id", "userId", "postId"],
      properties: {
        id: {
          $ref: "#/definitions/positiveInt",
        },
        userId: {
          $ref: "#/definitions/positiveInt",
        },
        postId: {
          $ref: "#/definitions/positiveInt",
        },
      },
    },
    positiveInt: {
      type: "integer",
      autoIncrement: true,
    },
  },
};

module.exports = schema;
