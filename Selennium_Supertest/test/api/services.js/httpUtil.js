const request = require("supertest");
require("dotenv").config();

const requestUrl = process.env.DEV_API_ENDPOINT;

const getRequest = async (url) => {
  const httpRequest = request(requestUrl).get(url);
  return httpRequest.send();
};

const postRequest = async (url, body) => {
  const httpRequest = request(requestUrl).post(url);
  return httpRequest.send(body);
};

const putRequest = async (url, body) => {
  const httpRequest = request(requestUrl).put(url);
  return httpRequest.send(body);
};

module.exports = { 
  getRequest,
  postRequest,
  putRequest,
 };
