const { getRequest, postRequest } = require("../services.js/httpUtil");

describe("Inital", () => {
  it("GET/", async () => {
    const getResponse = await getRequest("/pet/findByStatus?status=sold");
    expect(getResponse.status).toEqual(200);
  });

  it("POST/", async () => {
    const payload = {
        id: 10,
        petId: 20,
        quantity: 30,
        shipDate: "2022-10-20T04:11:21.054Z",
        status: "placed",
        complete: true,
      }

    const getResponse = await postRequest("/store/order", payload);
    expect(getResponse.status).toEqual(200);
    console.log(getResponse.body)
  });
});
