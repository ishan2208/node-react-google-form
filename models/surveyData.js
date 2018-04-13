const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var surveyDataSchema = new Schema({
    userDepartment:{type:String,required:true},
	userDesignation:{type:String,required:true},
	organisationRate:{type:Number},
	ceoRate:{type:Number},
	adviceText:{type:String},
	loggedInEmailId:{type:String,required:true},
	loggedInUserName:{type:String}
},{collection:"surveyCollection"});

const surveyDataModel = mongoose.model('surveyDataModel',surveyDataSchema);

module.exports={surveyDataSchema,surveyDataModel};