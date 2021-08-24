const taxService = require('./service/TaxService');
const patern = require('../validation/schema/TaxPatern');

class TaxWithReliefs {
    constructor(salary, value){
        this._salary = salary;
        this._value = value;
        this.count = this.count.bind(this);
    }

   async count(){
       const year = 12;
        let taxableIncome = (await this._salary * year) - await this._value;
        let annualTaxIncome = taxService.taxWithoutTaxRelief(patern, taxableIncome);
        const annual = {
            'taxableIncome': taxableIncome,
            'annualTaxIncome': annualTaxIncome.reduce((v, e)=>{ return v + e }),
        }
    return annual;
    }
}

module.exports = TaxWithReliefs;