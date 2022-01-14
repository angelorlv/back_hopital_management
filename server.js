let express = require('express')
let session = require('express-session')
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')

let MemoryStore = require('memorystore')(session)


let app = express()

//Middleware
// cookie parser middleware
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


let init = ()=>{
    let Data = require('./models/data')
    Data.create()
}
init()


app.use('/api',require('./routes/api.route'))


app.listen(4040)