//GET

describe('HTTP GET method with random parameters', ()  => {  
    it('should send GET request with random query parameters',  async () => {
        const randomValue1 = Math.random().toString(36).substring(2,15);
        const randomValue2 = Math.random().toString(36).substring(2,15);

        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/get',
            qs: {
                param1: randomValue1,
                param2: randomValue2
            }
        }
        ).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.args.param1).to.eq(randomValue1);
            expect(response.body.args.param2).to.eq(randomValue2);
            });
        });
    });