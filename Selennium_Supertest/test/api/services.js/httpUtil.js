const request = require("supertest");
require("dotenv").config();

const requestUrl = process.env.DEV_ENDPOINT;

const getRequest = async (url) => {
  const httpRequest = request('https://petstore.swagger.io/v2/pet/findByStatus?status=sold').get(url);
  return httpRequest.send();
};

module.exports = { getRequest };
