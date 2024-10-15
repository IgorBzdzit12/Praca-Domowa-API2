//PATCH

describe('HTTP PATCH method', () => {
    it('should send PATCH request and verify response', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://httpbin.org/patch',
            body: {
                patchKey: 'patchvalue'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.json.patchKey).to.eq('patchvalue');
        });
     });
});