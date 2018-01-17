const express = require('express');
const route = express.Router();


route.get('/register', (req, res) => {
    res.send('Registering route')
})

route.get('/authenticate', (req, res) => {
    res.send('authenticate route')
})

route.get('/profile', (req, res) => {
    res.send('profile route')
})

route.get('/validate', (req, res) => {
    res.send('Validate route')
})

module.exports = route