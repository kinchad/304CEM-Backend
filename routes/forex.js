const express=require('express')
const route=express.Router()
const forex_control = require('../controllers/forex')

const {validate, ValidationError} = require('express-json-validator')
const bookSchema = require('../models/forex').bookSchema

//const validator = Valiadtor.validate

route.get('/', forex_control.test)
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