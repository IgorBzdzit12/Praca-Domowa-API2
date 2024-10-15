//GET

describe('HTTP GET method with custom headers',  () => {
    it('should send GET request  with custom headers and verify response', () => {
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/get',
            headers: {
                'User-Agent': 'CypressTestAgent',
                'Custom-Header': 'CustomHeaderValue'
            }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.headers['User-Agent']).to.eq('CypressTestAgent');
                expect(response.body.headers['Custom-Header']).to.eq('CustomHeaderValue');
        });
    });
});
