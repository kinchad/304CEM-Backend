const express=require('express')
const route=express.Router()
const forex_control = require('../controllers/forex')
const user_control = require('../controllers/user')

const {validate, ValidationError} = require('express-json-validator')

route.get('/getLatestCurrency',forex_control.getLatestCurrency)
route.get('/getOneCurrencyAsk',forex_control.getOneCurrencyAsk)
route.get('/getOneCurrencyBid',forex_control.getOneCurrencyBid)
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
route.put('/updateFavour/:loginID/*',forex_control.updateRemarks)

route.delete('/deleteFavour/:loginID/*',forex_control.deleteFavour)

module.exports = route

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