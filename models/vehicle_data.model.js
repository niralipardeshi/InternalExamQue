const mongoose=require('mongoose');

const vehicleDataSchema=mongoose.Schema({
    vehicle_brand:String,
    category_name:String,
    picture:String,
    price:Number,
    depriciation:Number,
    no_of_year:Number,
    total_price:Number
});

var vehicleData=mongoose.model('vehicle_data',vehicleDataSchema);

module.exports=vehicleData;