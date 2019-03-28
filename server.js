const Express = require ('express')
const BodyParser = require('body-parser')
const forex = require('./routes/forex')
const App = Express()

App.use(BodyParser.json())
App.use(BodyParser.urlencoded({ extended: true }))
App.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
App.use('/', forex)

const port = 7777

App.listen(port, () => {
    console.log(`API Server is up and running on port numbet ${port}`)
})