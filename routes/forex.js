const express=require('express')
const route=express.Router()
const forex_control = require('../controllers/forex')
const user_control = require('../controllers/user')

const {validate, ValidationError} = require('express-json-validator')
const bookSchema = require('../models/forex').bookSchema

//const validator = Valiadtor.validate

route.get('/', forex_control.test)
route.get('/getLatestCurrency',forex_control.getLatestCurrency)
route.get('/getCurrencyByName',forex_control.getCurrencyByName)
route.get('/7dayPredict',forex_control.get7DayPredict)
route.get('/1MonthPredict',forex_control.get1MonthPredict)
route.get('/1YearPredict',forex_control.get1YearPredict)

route.post('/userLogin',user_control.userLogin)
route.post('/register',user_control.register)
/* route.post('/create', validate(bookSchema), book_controller.create)
route.get('/list', book_controller.list)
route.get('/list/:keyword', book_controller.keywordsearch)
route.put('/update', validate(bookSchema), book_controller.update) */

module.exports = route

//exports.validate = validator.validate()

route.use((err, req, res, next)=> {
    if(err){
        if(err instanceof ValidationError) {
            res.status(422).send({"status": 422, "description" : err.message})   // Unprocessable Entity
        } else {
            console.log("Help")
        }
    } else {
        next()
    }
})