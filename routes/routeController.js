var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const dataAccess = require("../dataAccess/survey");

router.use(bodyParser.json());

router.get("/home",(req,res)=>{
    res.status(200).json({
        "response":"ok",
        "sure":"yes"
    })
})

router.post("/addData",(req,res)=>{
    const userData = req.body;
    dataAccess.saveData(userData).then(responseData=>{
        res.status(200).json({
            "response":responseData
        })
    })
    
})

router.get("/getData",(req,res)=>{
    dataAccess.getData().then(responseData=>{
        res.status(200).json({
            "response":responseData
        })
    })
    
})


module.exports = router;