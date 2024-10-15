//POST

describe('HTTP POST method', () => {
    it('should send POST request and verify response', () => {
      cy.request({
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: {
          key1: 'value1',
          key2: 'value2'
        }
      }).then(response => {
        expect(response.status).to.eq(200);  
        expect(response.body.json.key1).to.eq('value1');  
        expect(response.body.json.key2).to.eq('value2');  
      });
    });
  });
  