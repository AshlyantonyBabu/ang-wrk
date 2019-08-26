const express = require('express');

var bdy =require('body-parser')
const app = express();
app.use(bdy.urlencoded({extended:true}))
app.use(bdy.json());
mon.connect(url,function(err){
    if(err)throw err
    else{
        console.log("database connected")
    }
    
})
var mon=require('mongoose')
var url="mongodb+srv://ashly:ashly@cluster0-nybb2.mongodb.net/emp?retryWrites=true&w=majority"
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();

});
app.get("/data",function(req,res){
    res.send([{name:"anu",age:34,msg:"passed"},{name:"rani",age:24,msg:"data"}])
})

app.listen(2000,function(req,res){
    console.log("server started")
});
