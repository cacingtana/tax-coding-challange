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


//without payload /withoutreliefs
test('should fail in post /withoutreliefs with no payload', async function () {
    const options = {
        method: 'POST',
        url: '/withoutreliefs',
    };
    const data = await server.inject(options);
    expect(data.statusCode).toBe(422);
    expect(data.result).toBe('Invalid or no payload');
});

//without payload /withoutreliefs
test('should fail in post /withreliefs with no payload', async function () {
    const options = {
        method: 'POST',
        url: '/withreliefs',
    };
    const data = await server.inject(options);
    expect(data.statusCode).toBe(422);
    expect(data.result).toBe('Invalid or no payload');
});

//without tax relief test
test('should calculate pph21 without tax reliefs successfully', async function(){
    const option = {
        method: 'POST',
        url: '/withoutreliefs',
        payload: JSON.stringify({salary: 25000000}),
    };

    const data = await server.inject(option);
    expect(data.statusCode).toBe(200);
    expect(data.result).toBe(data.result);
});

//with tax relief type test
test('should calculate pph21 with tax reliefs successfully', async function(){
    const option = {
        method: 'POST',
        url: '/withreliefs',
        payload: JSON.stringify({salary: 25000000, type:'TK0'}),
    };

    const data = await server.inject(option);
    expect(data.statusCode).toBe(200);
    expect(data.result).toBe(data.result);
});
