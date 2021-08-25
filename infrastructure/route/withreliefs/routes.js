const routes = (handler) => [
    {
        method: 'POST',
        path: '/withreliefs',
        handler: handler.postTaxation,
    }

];

module.exports = routes;