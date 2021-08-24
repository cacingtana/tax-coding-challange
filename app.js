const Hapi = require('@hapi/hapi');

const withoutreliefs = require('./infrastructure/route/withoutreliefs');
const withtreliefs = require('./infrastructure/route/withreliefs');

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {

    await server.register([
        {
        plugin: withoutreliefs,
        option: {},
        },
        {
        plugin: withtreliefs,
        option: {},
        }
    ]);

    await server.start();
    console.log(`Server running on : ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

module.exports = server;


