const express = require('express');
const router = express.Router();

// Details of Models
const EmployeeDetails = require('../models/Employee')
const SalaryDetails = require('../models/Salary')
const AdminDetails = require('../models/Admin')
const JobCode = require('../models/JobCode')
const LeaveCode = require('../models/LeaveCode') 

// Authorisation Function
function isEmpty(obj){
    for(var key in obj)
    {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

/*

const request = await AdminDetails.findById(req.params.id)
if(!isEmpty(request)) {}
else {
    res.send('NOT ALLOWED')
}

*/


// EMPLOYEE DETAILS -> GET FOR THE TABLE
router.get('/:id/emp/', async(req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request))
        {
            const query = { "admin" : req.params.id }
            const totalcount = await EmployeeDetails.countDocuments(query)
            const pagecount = parseInt(req.query.ept)
            const currpage = parseInt(req.query.set)

            const totalpages = Math.ceil(totalcount/pagecount) 
            const start =  (currpage == 1) ? 0 : ((currpage*pagecount) - pagecount)
            const end = start + pagecount
            var results = await LeaveCode.find(query)
            results = results.slice(start,end)
            res.json({pages : totalpages, result : results})
        }      
        else
        {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// EMPLOYEE DETAILS -> CREATION
router.post('/:id/emp', async(req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request))
        {
            const info = new EmployeeDetails({
                admin : req.params.id,
                Fname : req.body.Fname,
                Mname : req.body.Mname,
                Lname : req.body.Lname,
                DOB : req.body.dob,
                Gender : req.body.Gender,
                DOJ : req.body.doj,
                AddressL1 : req.body.AddressL1,
                AddressL2 : req.body.AddressL2,
                AddressL3 : req.body.AddressL3,
                State : req.body.State,
                Country : req.body.Country,
                Pincode : req.body.Pincode,
                EmpID : req.body.EmpID,
                Phone : req.body.Phone,
                email : req.body.email,
                FatherFname : req.body.FatherFname,
                FatherMname : req.body.FatherMname,
                FatherLname : req.body.FatherLname,
                MotherFname : req.body.MotherFname,
                MotherMname : req.body.MotherMname,
                MotherLname : req.body.MotherLname,
                SpouseFname : req.body.SpouseFname,
                SpouseMname : req.body.SpouseMname,
                SpouseLname : req.body.SpouseLname,
                SpouseGender : req.body.SpouseGender,
                Grade10 : req.body.Grade10,
                Type10 : req.body.Type10,
                Grade12 : phdNamereq.body.Grade12,
                Type12 : req.body.Type12,
                DegreeCourse : req.body.DegreeCourse,
                Degree : req.body.Degree,
                DegreeName : req.body.DegreeName,
                PGCourse : req.body.PGCourse,
                PG : req.body.pg,
                PGName : req.body.PGName,
                phdCourse : req.body.phdCourse,
                phd : req.body.phd,
                phdName : req.body.phdName,
                Ref1 : req.body.Ref1,
                Ref2 : req.body.Ref2,
                Ref3 : req.body.Ref3,
                JCode : req.body.JCode,
                SCode : req.body.SCode,
                LCode : req.body.LCode
            })
            const save = await info.save()
            res.json(save)
        }
        else
        {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// EMPLOYEE DETAILS -> PATCH SINGLE EMPLOYEE
router.patch('/:id/emp/:empid', async(req, res)=> {
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const query = { "EmpID" : req.params.empid, "admin" : req.params.id }
            const emp = await EmployeeDetails.findOne(query)
            emp.Fname = req.body.Fname,
            emp.Mname = req.body.Mname,
            emp.Lname = req.body.Lname,
            emp.DOB = req.body.dob,
            emp.Gender = req.body.Gender,
            emp.DOJ = req.body.doj,
            emp.AddressL1 = req.body.AddressL1,
            emp.AddressL2 = req.body.AddressL2,
            emp.AddressL3 = req.body.AddressL3,
            emp.State = req.body.State,
            emp.Country = req.body.Country,
            emp.Pincode = req.body.Pincode,
            emp.EmpID = req.body.EmpID,
            emp.Phone = req.body.Phone,
            emp.email = req.body.email,
            emp.FatherFname = req.body.FatherFname,
            emp.FatherMname = req.body.FatherMname,
            emp.FatherLname = req.body.FatherLname,
            emp.MotherFname = req.body.MotherFname,
            emp.MotherMname = req.body.MotherMname,
            emp.MotherLname = req.body.MotherLname,
            emp.SpouseFname = req.body.SpouseFname,
            emp.SpouseMname = req.body.SpouseMname,
            emp.SpouseLname = req.body.SpouseLname,
            emp.SpouseGender = req.body.SpouseGender,
            emp.Grade10 = req.body.Grade10,
            emp.Type10 = req.body.Type10,
            emp.Grade12 = phdNamereq.body.Grade12,
            emp.Type12 = req.body.Type12,
            emp.DegreeCourse = req.body.DegreeCourse,
            emp.Degree = req.body.Degree,
            emp.DegreeName = req.body.DegreeName,
            emp.PGCourse = req.body.PGCourse,
            emp.PG = req.body.pg,
            emp.PGName = req.body.PGName,
            emp.phdCourse = req.body.phdCourse,
            emp.phd = req.body.phd,
            emp.phdName = req.body.phdName,
            emp.Ref1 = req.body.Ref1,
            emp.Ref2 = req.body.Ref2,
            emp.Ref3 = req.body.Ref3,
            emp.JCode = req.body.JCode,
            emp.SCode = req.body.SCode,
            emp.LCode = req.body.LCode
            const save = await emp.save()
            res.json(save)
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// EMPLOYEE DETAILS -> DELETE
router.delete('/:id/emp/:empID', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const query = { "admin" : req.params.id, "EmpID" : req.params.empID}
            const id = await EmployeeDetails.findOne(query)
            const result = await id.delete()
            res.json(result)
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})


// SALARY DETAILS -> GET FOR TABLE
router.get('/:id/sal', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const query = { "admin" : req.params.id }
            const totalcount = await SalaryDetails.countDocuments(query)
            const pagecount = parseInt(req.query.ept)
            const currpage = parseInt(req.query.set)

            const totalpages = Math.ceil(totalcount/pagecount) 
            const start =  (currpage == 1) ? 0 : ((currpage*pagecount) - pagecount)
            const end = start + pagecount
            var results = await LeaveCode.find(query)
            results = results.slice(start,end)
            res.json({pages : totalpages, result : results})
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// SALARY DETAILS -> CREATION
router.post('/:id/sal', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const info = new SalaryDetails ({
                admin : req.params.id,
                SCode : req.body.SCode,
                TOP : req.body.top,
                BaseSal : req.body.BaseSal,
                A1 : req.body.A1,
                A2 : req.body.A2,
                A3 : req.body.A3
            })
            const save = await info.save()
            res.json(save)
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// SALARY DETAILS -> PATCH SINGLE DETAIL
router.patch('/:id/sal/:salcode', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const query = { "SCode" : req.params.salcode, "admin" : req.params.id }
            const salary = await SalaryDetails.findOne(query)
            salary.SCode = req.body.SCode
            salary.TOP = req.body.top
            salary.BaseSal = req.body.BaseSal
            salary.A1 = req.body.A1
            salary.A2 = req.body.A2
            salary.A3 = req.body.A3
            const save = await salary.save()
            res.json(save)
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// SALARY DETAILS -> DELETE
router.delete('/:id/sal/:salcode', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const query = { "SCode" : req.params.salcode, "admin" : req.params.id }
            const code = await SalaryDetails.findOne(query)
            const result = await code.delete()
            res.json(result)
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})


// JOB CODE -> GET FOR TABLE
router.get('/:id/job', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const query = { "admin" : req.params.id }
            const totalcount = await JobCode.countDocuments(query)
            const pagecount = parseInt(req.query.ept)
            const currpage = parseInt(req.query.set)

            const totalpages = Math.ceil(totalcount/pagecount) 
            const start =  (currpage == 1) ? 0 : ((currpage*pagecount) - pagecount)
            const end = start + pagecount
            var results = await LeaveCode.find(query)
            results = results.slice(start,end)
            res.json({pages : totalpages, result : results})
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// JOB CODE -> CREATION
router.post('/:id/job', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const info = new JobCode({
                admin : req.params.id,
                JCode : req.body.JCode,
                JTitle : req.body.JTitle,
                JRole : req.body.JRole,
                JDesc : req.body.JDesc,
                JDuties : req.body.JDuties,
                Comment : req.body.Comment
            })
            const save = await info.save()
            res.json(save)
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// JOB CODE -> PATCH SINGLE DETAIL
router.patch('/:id/job/:jcode', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const query = { "admin" : req.params.id, "JCode" : req.params.jcode }
            const job = await JobCode.findOne(query)
            job.JCode = req.body.JCode
            job.JTitle = req.body.JTitle
            job.JRole = req.body.JRole
            job.JDesc = req.body.JDesc
            job.JDuties = req.body.JDuties
            job.Comment = req.body.Comment
            const save = job.save()
            res.json(save)
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// JOB CODE -> DELETE
router.delete('/:id/job/:jcode', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const query = { "admin" : req.params.id, "JCode" : req.params.jcode }
            const job = await JobCode.findOne(query)
            const result = await job.delete()
            res.json(result)
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})


// LEAVE CODE -> GET FOR TABLE
router.get('/:id/leave', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const query = { "admin" : req.params.id }
            const totalcount = await LeaveCode.countDocuments(query)
            const pagecount = parseInt(req.query.ept)
            const currpage = parseInt(req.query.set)

            const totalpages = Math.ceil(totalcount/pagecount) 
            const start =  (currpage == 1) ? 0 : ((currpage*pagecount) - pagecount)
            const end = start + pagecount
            var results = await LeaveCode.find(query)
            results = results.slice(start,end)
            res.json({pages : totalpages, result : results})
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// LEAVE CODE -> CREATION
router.post('/:id/leave', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const info = new LeaveCode({
                admin : req.params.id,
                LCode : req.body.LCode,
                total : req.body.total,
                emergency : req.body.emergency
            })
            const save = await info.save()
            res.json(save)
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// LEAVE CODE -> PATCH SINGLE DETAIL
router.patch('/:id/leave/:lcode', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const query = { "admin" : req.params.id, "LCode" : req.params.lcode }
            const leave = await LeaveCode.findOne(query)
            leave.LCode = req.body.LCode
            leave.total = req.body.total
            leave.emergency = req.body.emergency
            const save = await leave.save()
            res.json(save)
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})

// LEAVE CODE -> DELETE
router.delete('/:id/leave/:lcode', async (req, res)=>{
    try {
        const request = await AdminDetails.findById(req.params.id)
        if(!isEmpty(request)) {
            const query = { "admin" : req.params.id, "LCode" : req.params.lcode }
            const leave = await LeaveCode.findOne(query)
            const result = await leave.delete()
            res.json(result)
        }
        else {
            res.send('NOT ALLOWED')
        }
    } catch (error) {
        res.send(error)
    }
})


// REGISTRATION -> POST VALUES
router.post('/reg', async (req, res)=>{
    try {
        const info = new AdminDetails({
            Cname : req.body.Cname,
            Fname : req.body.Fname,
            Mname : req.body.Mname,
            Lname : req.body.Lname,
            email : req.body.email,
            pwd : req.body.pwd
        })
        const save = await info.save()
        res.json(save)
    } catch (error) {
        res.send(error)
    }
})

// SIGN IN -> AUTHENTICATION
router.post('/login', async(req,res)=>{
    try {
        const query = { "email" : req.body.email, "pwd" : req.body.pwd }
        const authenticate = await AdminDetails.find(query)
        if(!isEmpty(authenticate))
        {
            res.json(authenticate[0]._id)
        }
        else {
            res.send("LOGIN FAILED")
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;