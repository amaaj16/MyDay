'use strict'
const express  = require('express')
const users = require('./routes/user.routes')
const bodyParser = require('body-parser')

const app = express()



app.use(bodyParser.urlencoded({ extended : false}))
app.use (bodyParser.json())

app.use("/auth",users)
// app.use("/user")
// app.use("/")
app.use("*",(req,res) =>{ res.status(404).json({error:"not found"})})

module.exports = app
