const mongoose = require('mongoose')
const EmployeeSchema = mongoose.Schema({
    admin : {
        type: String,
        required: true
    },
    Fname : {
        type : String,
        required : true
    },
    Mname : {
        type : String,
        required : false,
    },
    Lname : {
        type : String,
        required : true,
    },
    DOB : {
        type : Date,
        required : true
    },
    Gender : {
        type: String,
        required : true
    },
    DOJ : {
        type: Date,
        required : true
    },
    AddressL1 : {
        type: String,
        required : true
    },
    AddressL2 : {
        type: String,
        required : true
    },
    AddressL3 : {
        type: String,
        required : false,
        default: ""
    },
    State : {
        type: String,
        required : true
    },
    Country : {
        type: String,
        required : true
    },
    Pincode : {
        type: Number,
        required : true
    },
    EmpID : {
        type: String,
        required : true
    },
    Phone : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    FatherFname : {
        type: String,
        required : true
    },
    FatherMname : {
        type: String,
        required : false,
    },
    FatherLname : {
        type: String,
        required : true
    },
    MotherFname : {
        type: String,
        required : true
    },
    MotherMname : {
        type: String,
        required : false,
    },
    MotherLname : {
        type: String,
        required : true,
    },
    SpouseFname : {
        type: String,
        required : false,
        default: ""
    },
    SpouseMname : {
        type: String,
        required : false,
        default: ""
    },
    SpouseLname : {
        type: String,
        required : false,
        default: ""
    },
    SpouseGender : {
        type: String,
        required : false,
        default: ""
    },
    Grade10 : {
        type: Number,
        required : true,
    },
    Type10 : {
        type: String,
        required : true
    },
    Grade12 : {
        type: String,
        required : true
    },
    Type12 : {
        type: String,
        required : true
    },
    DegreeCourse : {
        type: String,
        required : true
    },
    Degree : {
        type: String,
        required : true
    },
    DegreeName : {
        type: String,
        required : true
    },
    PGCourse : {
        type: String,
        required : false,
        default: ""
    },
    PG : {
        type: String,
        required : false,
        default: ""
    },
    PGName : {
        type: String,
        required : false,
        default: ""
    },
    phdCourse : {
        type: String,
        required : false,
        default : ""
    },
    phd : {
        type: String,
        required : false,
        default: ""
    },
    phdName : {
        type: String,
        required : false,
        default: ""
    },
    Ref1 : {
        type: String,
        required : false
    },
    Ref2 : {
        type: String,
        required : false
    },
    Ref3 : {
        type: String,
        required : false
    },
    JCode : {
        type: String,
        required : true
    },
    SCode : {
        type: String,
        required : true
    },
    LCode : {
        type: String,
        required : true
    }
})

module.exports = mongoose.model("EmployeeDetails", EmployeeSchema)