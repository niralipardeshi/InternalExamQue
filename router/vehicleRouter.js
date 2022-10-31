const categoryData=require('../models/category.model');
const express=require('express');
const vehicleData = require('../models/vehicle_data.model');
const router=express.Router();
const multer=require('multer');
router.use(express.static("upload"));

const upload=multer({
    storage:multer.diskStorage({
        destination:(err,file,cb)=>{
        cb(null,'./upload');
    },
    filename:(err,file,cb)=>{
        cb(null,file.originalname);
    }
    })
});

router.get('/',(req,res)=>{
    res.send('<h2>This is vehicle crud</h2><a href="/add"> ADD</a><br><a href="/cat"> Category</a><br><a href="/list"> List</a>');
})

router.get('/add',(req,res)=>{
    // res.render('add');
    categoryData.find((err,catData)=>{
        console.log(catData);
        if(err) return console.log('there is a problem in fetch category');
        res.render('add',{catData:catData});
    })
})

router.post('/save',upload.single('file'),(req,res)=>{
    
    let dep=req.body.price/req.body.no_of_year;
    let TotPrice=req.body.price-dep;
 
    var vd=new vehicleData({
        vehicle_brand:req.body.vehicle_brand,            
        category_name:req.body.category_name,
        //category_name:mycat,
        picture:req.file.filename,
        price:req.body.price,
        depriciation:dep,
        no_of_year:req.body.no_of_year,
        total_price:TotPrice
    })

    vd.save((err)=>{    
        if(err) return  console.log('there is a problem');
        res.redirect('/list');
        
    })
})

router.get('/cat',(req,res)=>{
    categoryData.find((err,cate)=>{
        console.log(cate);
       if(err) return  console.log('there is a problem');
        res.render('cat',{cate:cate});
    })
})

router.get('/list',(req,res)=>{
    vehicleData.find((err,data)=>{
        console.log(data);
        if(err) return console.log('there is a problem');
        res.render('list',{data:data});
    })
})
module.exports=router;