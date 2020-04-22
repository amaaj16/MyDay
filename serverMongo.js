'use strict'
const UserDAO = require('./models/userDAO')
const mongoClient = require('mongodb').MongoClient
const port = process.env.PORT || 2000
const app = require('./index.js')
mongoClient.connect(process.env.DB_URI,
    {
        useUnifiedTopology: true,
        poolSize:50,
        wtimeout:2500
    },

).catch(err=>{
    console.error(err.stack)
    process.exit(1)
}).then(async client=>{
    await UserDAO.injectDB(client)
    app.listen(port,()=>{
        console.log(`Sever is running on port: ${port}`)
    })
}
)