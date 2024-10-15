//GET

describe('HTTP GET method', ()  => {
it('should return a 200 status code', () => {
    cy.request({
        method: 'GET',
        url: 'https://httpbin.org/get',
        qs:  {
            apple: '1kg',
            orange: '4kg'
        }
    }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.args.apple).to.eq('1kg');
        expect(response.body.args.orange).to.eq('4kg');
    });
  });
});