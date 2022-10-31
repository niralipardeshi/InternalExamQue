const mongoose=require('mongoose');

const categorySchema=mongoose.Schema({
    category_name:String
});

var categoryData=mongoose.model('category',categorySchema);

module.exports=categoryData;