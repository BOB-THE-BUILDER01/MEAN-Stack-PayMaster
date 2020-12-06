const mongoose = require('mongoose')
const JobSchema = mongoose.Schema({
    admin : {
        type : String,
        required: true
    },
    JCode : {
        type: String,
        required: true
    },
    JTitle : {
        type: String,
        required: true
    },
    JRole : {
        type: String,
        required: true
    },
    JDesc : {
        type: String,
        required: true
    },
    JDuties : {
        type: String,
        required: true
    },
    Comment : {
        type : String,
        required : false
    }
})


module.exports = mongoose.model("JobCode", JobSchema)