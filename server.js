const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')

const routes = require('./routes_users')

const app = express()
app.set('port', process.env.PORT || 4000)
const dboptions = {
    host: 'viaduct.proxy.rlwy.net',
    port: 36056,
    user: 'root',
    password: '-E5d41fC51GCA3bdB-c-4EFfcfCFAA6c',
    database: 'railway'
}

//middlewares
app.use(myconn(mysql, dboptions, 'single'))
app.use(express.json())

// routes
app.get('/', (req, res)=>{
    res.send('Welcome to the WINCOME API')
})
app.use('/api', routes)

// server running
app.listen(app.get('port'), () =>{
    console.log('server running on port', app.get('port'))
})