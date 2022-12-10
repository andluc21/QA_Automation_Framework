const { getRequest, postRequest } = require("../services.js/httpUtil");
const orderId = 11

describe("Pet Store Inventory", () => {
  it("GET/ Retrieving pets by a valid status is successful", async () => {
    const getResponse = await getRequest("/pet/findByStatus?status=sold");
    expect(getResponse.status).toEqual(200);
  });

  it("POST/ Creating a valid pet order is successful", async () => {
    const payload = {
        id: orderId,
        petId: 20,
        quantity: 31,
        shipDate: "2022-10-20T04:11:21.054Z",
        status: "placed",
        complete: true,
      }

    const getResponse = await postRequest("/store/order", payload);
    expect(getResponse.status).toEqual(200);
  });

  it("GET/ Retrieving the newly created order by orderId is successful", async () => {
    const getResponse = await getRequest(`/store/order/${orderId}`);
    expect(getResponse.status).toEqual(200);
    console.log(getResponse.body)
  });
});
