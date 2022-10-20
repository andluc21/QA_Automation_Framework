const request = require("supertest");
require("dotenv").config();

const requestUrl = process.env.DEV_API_ENDPOINT;

const getRequest = async (url) => {
  const httpRequest = request(requestUrl).get(url);
  return httpRequest.send();
};

module.exports = { getRequest };
