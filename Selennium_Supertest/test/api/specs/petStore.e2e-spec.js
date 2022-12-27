const { getRequest, postRequest, putRequest } = require("../services.js/httpUtil");
const username = 'madeUpUserName100'

describe("Pet Store Inventory", () => {
  it("GET/ Retrieving pets by a valid status is successful", async () => {
    const getResponse = await getRequest('/pet/findByStatus?status=sold');
    expect(getResponse.status).toEqual(200);
  });

  it("POST/ Creating a valid user is successful", async () => {
    const payload = {
      id: 50010,          
      username,
      firstName: "string",
      lastName: "string",
      email: "string",
      password: "string",
      phone: "string",
      userStatus: 0,
    };

    const postResponse = await postRequest('/user', payload);
    expect(postResponse.status).toEqual(200);
    console.log(postResponse.body);
  });

  it("PUT/ Updating a specific user is successful", async () => {
    const payload = {
      id: 50010,      
      username,
      firstName: "updatedFirstName",
      lastName: "string",
      email: "string",
      password: "string",
      phone: "string",
      userStatus: 0,
    };

    const putResponse = await putRequest(`/user/${username}`, payload); 
    expect(putResponse.status).toEqual(200);
    console.log(putResponse.body);
  });

  it("GET/ Retrieving the newly created user by name is successful", async () => {
    const getResponse = await getRequest(`/user/${username}`);
    expect(getResponse.status).toEqual(200);
    console.log(getResponse.body);
  });
});
