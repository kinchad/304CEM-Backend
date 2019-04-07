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
route.get('/getCurrencyName',forex_control.getCurrencyName)
route.get('/sevenDayPredict',forex_control.get7DayPredict)
route.get('/oneMonthPredict',forex_control.get1MonthPredict)
route.get('/oneYearPredict',forex_control.get1YearPredict)
route.get('/getFavourList',forex_control.getFavourList)

route.post('/userLogin',user_control.userLogin)
route.post('/register',user_control.register)
route.post('/addToFavour/:loginID',forex_control.addToFavour)

route.put('/updateUser/:currentUser',user_control.updateUser)

route.delete('/deleteFavour/:loginID/:favourCurrency',forex_control.deleteFavour)
/* route.post('/create', validate(bookSchema), book_controller.create)
route.put('/update', validate(bookSchema), book_controller.update) */

module.exports = route

//exports.validate = validator.validate()

route.use((err, req, res, next)=> {
    if(err){
        if(err instanceof ValidationError) {
            res.status(422).send({"status": 422, "description" : err.message})   // Unprocessable Entity
        } else {
            console.log(err)
        }
    } else {
        next()
    }
})