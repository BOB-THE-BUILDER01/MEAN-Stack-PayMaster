const mongoose = require('mongoose')
const AdminSchema = mongoose.Schema({
    Cname : {
        type: String,
        required: true
    },
    Fname : {
        type: String,
        required: true
    },
    Mname : {
        type: String,
        required: false
    },
    Lname : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    pwd : {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Admin", AdminSchema)