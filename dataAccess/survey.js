const mongoose = require("mongoose");
const surveyDataSchema = require("../models/surveyData").surveyDataSchema;
const surveyDataModel = require("../models/surveyData").surveyDataModel;
const url = "mongodb://localhost:27017/surveyDB";

mongoose.connect(url)


module.exports = {
    saveData : (data) => new Promise((success,failure)=>{
        let surveyData = new surveyDataModel(data);
        surveyData.save().then((response)=>{
            success(response);
        })
    }),

    getData: () => new Promise((success, failure) => {
        surveyDataModel.find().then((doc)=>{
            success(doc);
        })
    })

}