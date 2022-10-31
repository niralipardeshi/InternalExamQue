require('./database/db');
const vehicleRoute=require('./router/vehicleRouter');
const express=require('express');
const app=express();
const port=8080;

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use('/',vehicleRoute);

app.listen(port,()=>{
    console.log('server contected on port '+port);
})