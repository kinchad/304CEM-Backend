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
        if(err) throw err
        res.send(
            '<script>alert("Success.");</script>'+
            '<br><a href="http://localhost:4200/">Back to home page</a>'
        )
        //res.send("123")
    })
}
exports.userLogin =  function(req,res){

}