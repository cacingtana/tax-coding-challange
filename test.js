const server = require('./app');

beforeAll((done) => {
    server.events.on('start', () =>{
        done();
    })
});

afterAll((done) => {
    server.events.on('stop', () => {
        done();
    })
    server.stop();
});


//without relief test
// test('should calculate tax rate successfully', async function(){
//     const option = {
//         method: 'POST',
//         url: '/withoutreliefs',
//         payload: JSON.stringify({salary: 25000000}),
//     };

//     const data = await server.inject(option);
//     expect(data.statusCode).toBe(200);
//     expect(data.result).toBe('Tax rate 5%');
// });

//with relief type test
test('should calculate tax rate successfully', async function(){
    const option = {
        method: 'POST',
        url: '/withreliefs',
        payload: JSON.stringify({salary: 25000000, type:'TK0'}),
    };

    const data = await server.inject(option);
    expect(data.statusCode).toBe(200);
    expect(data.result).toBe('Tax relief');
});
