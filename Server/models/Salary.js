const mongoose = require('mongoose')
const SalarySchema = mongoose.Schema({
    admin : {
        type: String,
        required: true
    },
    SCode : {
        type: String,
        required: true
    },
    TOP : {
        type: String,
        required: true
    },
    BaseSal : {
        type : Number,
        required: true
    },
    A1 : {
        type : Number,
        required : false
    },
    A2 : {
        type : Number,
        required : false
    },
    A3 : {
        type : Number,
        required : false
    }
})

module.exports = mongoose.model("SalaryDetails", SalarySchema)