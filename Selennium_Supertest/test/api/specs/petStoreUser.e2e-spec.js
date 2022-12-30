const { getRequest, postRequest, putRequest } = require("../services.js/httpUtil");
const password = process.env.USER_PASS;
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
      firstName: "Luca",
      lastName: "Andolina",
      email: "luca.andolina@gmail.com",
      password,
      phone: "343-943-2345",
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
      firstName: "Luca",
      lastName: "Andolina",
      email: "updatedEmail@comcast.net",
      password,
      phone: "343-943-2345",
      userStatus: 0,
    };

    const putResponse = await putRequest(`/user/${username}`, payload); 
    expect(putResponse.status).toEqual(200);
    console.log(putResponse.body);
  });

  it("GET/ Retrieving the newly created user by name is successful", async () => {
    const getResponse = await getRequest(`/user/${username}`);
    expect(getResponse.status).toEqual(200);
    expect(getResponse.body.username).toEqual(username);
    expect(getResponse.body.password).toEqual(password);
    expect(getResponse.body.email).toEqual("updatedEmail@comcast.net");
  });
});
