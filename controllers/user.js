const mysql = require('mysql')
const md5 = require('md5')
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'forex',
    dbPort:'3306'
})
exports.register = function(req,res){
    var login = req.body.loginID
    var password = req.body.password
    var confirmPwd = req.body.confirmPwd
    var name = req.body.userName
    var email = req.body.email
    sql = 'insert into user values("'+login+'","'+md5(password+'forexWEB')+'","'+name+'","'+email+'")'
    con.query(sql,function(err,result){
        if(err) return res.status(500).send('Server error.')
        //return res.status(201).send('User registerd.')
        return res.send('')
    })
}
exports.userLogin =  function(req,res){
    var login = req.body.loginID
    var password = req.body.password
    sql = 'select * from user where login="'+login+'" and password="'+md5(password+'forexWEB')+'"'
    con.query(sql,function(err,result){
        if(err) return res.status(500).send('Server error.')
        if(result.length>0) return res.send(result)
        else{
            //return res.status(401).send('Login or password is wrong.')
            res.send('')
        }
    })
}
exports.updateUser = function(req,res){
    var login = req.params.currentUser
    var userName = req.body.userName
    var password = req.body.password
    var confirmPwd = req.body.confirmPwd
    var email = req.body.email
    sql = 'update user set name="'+userName+'",password="'+md5(password+'forexWEB')+'",email="'+email+'" where login="'+login+'"'
    con.query(sql,function(err,result){
        if(err) return res.status(500).send('Server error.')
        //return res.status(201).send('User registerd.')
        return res.send('')
    })
}