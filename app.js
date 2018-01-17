// required modules
const {join, resolve} = require('path')
const express = require('express')
//const { createServer} = require('http')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const dbconf = require('./module/db')

// app runners
const app = express()
const index = require('./rend/index')
const auth = require('./rend/index')
//mongoose.connect(dbconf.dburl)


// app conf
const PORT = process.env.PORT || 3000

// mongoose.connection.on('connected', () => {console.log('connected to database', dbconf.dburl)})
// mongoose.connection.on('error', (err) => { console.error('Error connecting to database', err) })

app.use('/static', express.static(join(__dirname, 'public', 'static')))
app.use( express.static(join(__dirname, '../ang-client', 'dist'))) // serve static folder for Angular

app.set('views', join(__dirname, 'public', 'template'))
app.set('view engine', 'ejs')


// app pages and routes
app.use('/ser', index)
app.use('/auth', auth)


// app dev catch
app.listen(PORT, ()=>{
    process.stdout.write(`your app is listening on port http://localhost:${PORT}`)
})
