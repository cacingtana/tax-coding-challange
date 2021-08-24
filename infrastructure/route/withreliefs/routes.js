const routes = (handler) => [
    {
        method: 'GET',
        path: '/withreliefs',
        handler: handler.getTaxation,
    },
    {
        method: 'POST',
        path: '/withreliefs',
        handler: handler.postTaxation,
    }

];

module.exports = routes;