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
exports.getFavourList = function(req,res){
    loginID = req.query.loginID
    sql = 'select * from favour where login="'+loginID+'"'
    con.query(sql,function(err,result){
        if(err) throw err
        res.send(result)
    })
}
exports.addToFavour = function(req,res){
    loginID = req.params.loginID
    favourCurrency = req.body.favourCurrency
    remarks = req.body.remarks
    sql = 'insert into favour values("'+loginID+'","'+favourCurrency+'","'+remarks+'")'
    console.log(sql)
    con.query(sql,function(err,result){
        if(err) return res.status(500).send('Server error.')
        return res.send('')
    })
}
exports.updateRemarks = function(req,res){
    loginID = req.query.loginID
    currencyName = req.query.currencyName
    remarks = req.body.remarks
    sql = 'update favour set remarks="'+remarks+'" where login="'+loginID+'" and currencyName="'+currencyName+'"'
    con.query(sql,function(err,result){
        if(err) return res.status(500).send('Server error.')
        return res.send('')
    })
}
exports.deleteFavour = function(req,res){
    loginID = req.params.loginID
    favourCurrency = req.params.favourCurrency
    console.log(loginID)
    console.log(favourCurrency)
/*     sql = 'delete from favour where loginID="'+loginID+'" and currencyName="'+favourCurrency+'"'
    con.query(sql,function(err,result){
        if(err) return res.status(500).send('Server error.')
        return res.send('')
    }) */
}