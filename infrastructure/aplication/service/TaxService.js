
const TaxCalculation = {
    taxWithoutTaxRelief: (patern, taxableIncome) => {
        let totalPkp = [];
        let pkp = taxableIncome;
        for (let i=0; i < patern.length; i++){
            if(pkp > patern[i].value){
                pkp = pkp - patern[i].value;
                totalPkp.push(patern[i].value * patern[i].persentage);
            }else{
                totalPkp.push(pkp * patern[i].persentage);
                break;
            }
        }
        return totalPkp;
    }
}

module.exports = TaxCalculation;