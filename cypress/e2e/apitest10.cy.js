describe('HTTP GET method with response time check',  () => {
    it('should check response time for GET requst',  () => {
        cy.requst({
            method: 'GET',
            url: 'https://httpbin.org/get',
        }).then(response =>  {
            expect(response.status).to.eq(200);
            expect(response.duration).to.be.lessThan(1000);
            });
        });
    });