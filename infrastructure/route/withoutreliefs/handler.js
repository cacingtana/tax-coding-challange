const taxation = require('../../validation/schema/Taxation');
const TaxNotReliefs = require('../../aplication/TaxWithoutReliefs');
const validate = require('../../validation');

class TaxHandler {
    constructor(){
        this.postTaxation = this.postTaxation.bind(this);
    }

    async postTaxation(request, h){
        if(request.payload && request.payload.salary){
            const calculate = new TaxNotReliefs(request.payload.salary); 
            const pph21 = await calculate.count();
            let taxationSchema = validate.validateTaxSchema(request.payload.salary);
            let result = taxation.find(rate => rate.persentage === taxationSchema);
            if(result){
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