//GET

describe('httpbin API tests', () => {
    it('should return a 200 response', () => {
      cy.request('https://httpbin.org/get').then(response => {
        expect(response.status).to.eq(200);
      });
    });
  });
  
  