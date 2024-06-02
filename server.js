const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT
const collection = require('./mongodb')

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', async (req, res) => {
  res.render('pages/index')
})

app.post('/login', async (req, res) =>{
  const data = {
    username: req.body.usernameLogin,
    password: req.body.passwordLogin
  }

  await collection.insertMany([data])

  res.render('/pages/feed')
})
app.post('/register', async (req, res) =>{
  const data = {
    username: req.body.usernameRegister,
    password: req.body.passwordRegister
  }

  await collection.insertMany([data])

  res.render('/pages/feed')
})

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
