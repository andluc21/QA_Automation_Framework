const request = require("supertest");
require("dotenv").config();

const requestUrl = process.env.DEV_ENDPOINT;

const getRequest = async (url) => {
  const httpRequest = request(requestUrl).get(url);
  return httpRequest.send();
};

export { getRequest };
