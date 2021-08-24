const TaxHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'withoutreliefs',
    version: '1.0.0',
    register: async (server, {validate}) => {
        const taxCalculation = new TaxHandler(validate);
        server.route(routes(taxCalculation));
    },
};