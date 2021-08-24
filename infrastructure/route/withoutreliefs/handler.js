const taxation = require('../../validation/schema/Taxation');
const TaxNotReliefs = require('../../aplication/TaxWithoutReliefs');
const validate = require('../../validation/validateTaxSchema');

class TaxHandler {
    constructor(){
        this.postTaxation = this.postTaxation.bind(this);
        this.getTaxation = this.getTaxation.bind(this);
    }

    async postTaxation(request, h){
        if(request.payload && request.payload.salary){
            const calculate = new TaxNotReliefs(request.payload.salary); 
            let taxpay = calculate.count();
            let taxationSchema = validate(request.payload.salary);
            let result = taxation.find(rate => rate.persentage === taxationSchema);
            if(result){
               return h.response('Tax rate 5%').code(200);
            }
        } 
        else{
            return h.response('Invalid Salary ammount').code(422);
        }
    }

    async getTaxation(request, h){
      
    }
}

module.exports = TaxHandler;