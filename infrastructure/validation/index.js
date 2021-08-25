const taxation = require('./schema/Taxation');

module.exports = {
    validateTaxSchema : (params)=> {
        if(params <= 50000000 && params >= 0){
            return taxation[0].persentage;
        }else if(params <= 250000000 && params >= 50000000){
            return taxation[1].persentage;
        }else if(params <= 500000000 && params >= 250000000){
            return taxation[2].persentage;
        }else{
            return taxation[3].persentage;
        }
    }
}