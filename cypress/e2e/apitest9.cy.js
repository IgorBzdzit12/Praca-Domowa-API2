//POST

describe('HTTP POST method with JSON body',  () => {
    it('should send POST request with JSON data and verify response', () => {
        const data = { name: 'Jackie Chan', age: 30 };

        requestAnimationFrame({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: data,
            headers: {
                 'Content-Type': 'application/json'
             }
             }).then (response => {
                expect(response.status).to.eq(200);
                expect(response.body.json.name).to.eq('Jackie Chan');
                expect(response.body.json.age).to.eq(30);
            });
        });
 });