//PUT

describe ('HTTP PUT metohod',  () => {
    it ('should send PUT request and verify  response', async () => {
        cy.request({
            method: 'PUT',
            url: 'https://httpbin.org/put',
            body: {
                name: 'Reece James',
            }
        }).then ((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.json.uptadeKey).to.eq('Reece James');
        });
    });
});