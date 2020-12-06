const mongoose = require('mongoose')
const LeaveSchema = mongoose.Schema({
    admin: {
        type : String,
        required : true
    },
    LCode : {
        type: String,
        required : true
    },
    total : {
        type : Number,
        required: true
    },
    emergency : {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("LeaveCode", LeaveSchema)