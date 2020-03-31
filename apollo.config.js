require("dotenv").config();

module.exports = {
  client: {
    service: {
      name: "ST GraphQL Schema",
      url: process.env.REACT_APP_GRAPHQL_ENDPOINT,
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
      },
    },
  },
};
