const taxreliefs = require('../../validation/schema/TaxRelief');
const TaxWithReliefs = require('../../aplication/TaxWithReliefs');

class TaxHandler {
    constructor(){
        this.postTaxation = this.postTaxation.bind(this);
    }

    async postTaxation(request, h){
        if(request.payload && request.payload.salary && request.payload.type){
        let result = taxreliefs.find(rate => rate.type === request.payload.type);
            if(result){
                const calculate = new TaxWithReliefs( request.payload.salary, result.value);
                const pph21 = await calculate.count();
                const response = h.response({
                    status: 'success',
                    message: result.note,
                    data: {
                        pph21,
                    }
            })
            response.code(200);
            return response;
            }
        } 
        else{
            return h.response('Invalid or no payload').code(422);
        }
     }
}

module.exports = TaxHandler;