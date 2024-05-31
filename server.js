const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', async (req, res) => {
  res.render('pages/index')
})

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
