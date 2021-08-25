const routes = (handler) => [
    {
        method: 'POST',
        path: '/withoutreliefs',
        handler: handler.postTaxation,
    }

];

module.exports = routes;


