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
exports.testAuto = function(a,b){
    return a+b
}
exports.getLatestCurrency = function(req, res){
    sql = 'select name, bid , ask, max(time) as time from currency group by name'
    con.query(sql,function(err,result){
        if(err) throw err
        res.send(result)
    })
}
exports.getCurrencyByName = function(req,res){
    name = req.query.name 
    sql = 'select * from currency where name="'+name+'"'
    con.query(sql,function(err,result){
        if(err) throw err
        res.send(result)
    })
}
exports.getCurrencyName = function(req,res){
    sql = 'select name from currency group by name'
    con.query(sql,function(err,result){
        if(err) throw err
        res.send(result)
    })
}
exports.get7DayPredict = function(req,res){
    name = req.query.name
    algorithm = req.query.algorithm
    sql = 'select * from prediction_7day where name="'+name+'" and algorithm="'+algorithm+'"'    
    con.query(sql,function(err,result){
        if(err) throw err
        res.send(result)
    })
}
exports.get1MonthPredict = function(req,res){
    name = req.query.name
    algorithm = req.query.algorithm
    sql = 'select * from prediction_1month where name="'+name+'" and algorithm="'+algorithm+'"'
    con.query(sql,function(err,result){
        if(err) throw err
        res.send(result)
    })
}
exports.get1YearPredict = function(req,res){
    name = req.query.name
    algorithm = req.query.algorithm
    sql = 'select * from prediction_1year where name="'+name+'" and algorithm="'+algorithm+'"'
    con.query(sql,function(err,result){
        if(err) throw err
        res.send(result)
    })
}