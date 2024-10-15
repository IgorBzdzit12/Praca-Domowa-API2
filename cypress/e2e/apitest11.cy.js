describe('HTTP PUT method with JSON body', () => {
    it('should send PUT request and verify response', () => {
      const updateData = { key1: 'updatedValue1', key2: 'updatedValue2' };
  
      cy.request({
        method: 'PUT',
        url: 'https://httpbin.org/put',
        body: updateData,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body.json.key1).to.eq('updatedValue1');
        expect(response.body.json.key2).to.eq('updatedValue2');
      });
    });
  });
  