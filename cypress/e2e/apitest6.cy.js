//DELETE

describe('HTTP DELETE method', () => {
    it('should send DELETE request and verify response', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://httpbin.org/delete',
        body: {
          deleteKey: 'deleteValue'
        }
      }).then(response => {
        expect(response.status).to.eq(200);  
        expect(response.body.json.deleteKey).to.eq('deleteValue');  
    });
  });
});  