const routes = (handler) => [
    {
        method: 'GET',
        path: '/withoutreliefs',
        handler: handler.getTaxation,
    },
    {
        method: 'POST',
        path: '/withoutreliefs',
        handler: handler.postTaxation,
    }

];

module.exports = routes;


