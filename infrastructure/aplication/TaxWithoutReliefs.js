const taxService = require('./service/TaxService');
const patern = require('../validation/schema/TaxPatern');

class TaxWithoutReliefs {
    constructor (salary){
        this._salary = salary;
        this.count = this.count.bind(this);
    }

    async count(){
        let taxableIncome = await this._salary * 12;
        let result = taxService.taxWithoutTaxRelief(patern, taxableIncome);
        let taxOnThisIncome = result.reduce((v, e)=>{ return v + e });
        return {
            'Annual taxable income' : taxableIncome,
            'Annual Tax on this Income' : taxOnThisIncome,
        };
    }
}

module.exports = TaxWithoutReliefs;