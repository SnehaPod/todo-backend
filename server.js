const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const config = require('./config')
const mysql = require('mysql')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser('LOL-my-Secret-dam'))

global.__base = __dirname;
// app.use('/todos', router)
app.db = mongoose.createConnection(config.mongodb.uri);
app.db.once('open', () => {
    console.log(config.mongodb.uri);
})
app.con = mysql.createConnection(config.configObj)
app.con.connect()
require('./app/routes').routeFunc(app);
require('./app/schema').schemaFunc(app, mongoose);

app.listen(config.port, () => {
    console.log('The magic happens at port '+ config.port)
})