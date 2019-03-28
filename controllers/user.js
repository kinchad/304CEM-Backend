const mysql = require('mysql')

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'forex',
    dbPort:'3306'
})

exports.register = function(req,res){
    var login = req.body.login
    var password = req.body.password
    var confirmPwd = req.body.confirmPwd
    var name = req.body.name
    var email = req.body.email
    sql = 'insert into user values("'+login+'","'+md5(password+'forexWEB')+'","'+name+'","'+email+'")'
    con.query(sql,function(err,result){
        if(err) throw err
        res.send(
            '<script>alert("Success.");</script>'+
            '<br><a href="http://localhost:8080/">Back to home page</a>'
        )
    })
}
exports.userLogin =  function(req,res){

}