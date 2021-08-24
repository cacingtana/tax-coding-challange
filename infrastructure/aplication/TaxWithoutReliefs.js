const taxService = require('./service/TaxService');
const patern = require('../validation/schema/TaxPatern');

class TaxWithoutReliefs {
    constructor (salary){
        this._salary = salary;
        this.count = this.count.bind(this);
    }

    async count(){
        const year = 12;
        let taxableIncome = await this._salary * year;
        let taxOnThisIncome = taxService.taxWithoutTaxRelief(patern, taxableIncome);

        console.log(taxOnThisIncome);
        const annual = {
            'taxableIncome': taxableIncome,
            'taxOnThisIncome': taxOnThisIncome.reduce((v, e)=>{ return v + e },
        }
        return annual; 
    }
}

module.exports = TaxWithoutReliefs;