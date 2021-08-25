const taxService = require('./service/TaxService');
const patern = require('../validation/schema/TaxPatern');

class TaxWithReliefs {
    constructor(salary, value){
        this._salary = salary;
        this._value = value;
        this.count = this.count.bind(this);
    }

   async count(){
        let taxableIncome = (await this._salary * 12) - await this._value;
        let result = taxService.taxWithoutTaxRelief(patern, taxableIncome);
        let taxOnThisIncome = result.reduce((v, e)=>{ return v + e });
        return {
            'Annual taxable income' : taxableIncome,
            'Annual Tax on this Income' : taxOnThisIncome,
        }; 
    }
}

module.exports = TaxWithReliefs;