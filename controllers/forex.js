const Express = require('express')
const mysql = require('mysql')

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'forex',
    dbPort:'3306'
})


exports.test = function (req, res) {
    res.send({"status": 200, "Description": "Well... This is only a testing... "})
}