const taxreliefs = require('../../validation/schema/TaxRelief');
const TaxWithReliefs = require('../../aplication/TaxWithReliefs');

class TaxHandler {
    constructor(){
        this.postTaxation = this.postTaxation.bind(this);
        this.getTaxation = this.getTaxation.bind(this);
    }

    async postTaxation(request, h){
        if(request.payload.salary && request.payload.type){
        let result = taxreliefs.find(rate => rate.type === request.payload.type);
            if(result){
                console.log(result);
                const calculate = new TaxWithReliefs( request.payload.salary, result.value);
                const annualTaxIncome = await calculate.count();
                console.log(annualTaxIncome);
                return h.response('Tax relief').code(200);
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