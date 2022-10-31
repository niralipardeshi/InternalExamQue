const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/VehicleDB",{useNewUrlParser:true},(err)=>{
    if(!err){console.log('Database connected successfully')}
    else(console.log('connection err'+err))
})

require('../models/vehicle_data.model');
require('../models/category.model');
