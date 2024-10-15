describe ('HTTP PATCH method with partial data update',  () => {
    it('should send PATCH request and verify partial update', () => {
        const  patchdata = { name: 'Nickolas' };

        cy.request({
            method: 'PATCH',
            url: 'httpbin.org/patch',
            body: patchdata,
            headers: {
                'Content-Type': 'application/json',
                }
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body.json.name).to.eq('Nickolas');
            });
         });
    });
            