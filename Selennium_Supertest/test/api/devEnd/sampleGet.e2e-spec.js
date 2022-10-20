const { getRequest } = require("../services.js/httpUtil")


describe('getting', () => {
    it('something happens deeper', async () => {
        const getResponse = await getRequest('/endpoint')
        expect(getResponse.status).toEqual(200);
    })
})