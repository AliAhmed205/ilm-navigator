const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const collection = require('./mongodb');

// Stel de views directory en view engine in
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  res.render('pages/index');  // Dit moet correct verwijzen naar 'views/pages/index.ejs'
});

app.post('/login', async (req, res) =>{
  const data = {
    username: req.body.usernameLogin,
    password: req.body.passwordLogin
  };

  await collection.insertMany([data]);

  res.render('pages/feed');  // Dit moet correct verwijzen naar 'views/pages/feed.ejs'
});

app.get('/feed', async (req, res) =>{
  res.render('pages/feed.ejs')
})

app.post('/register', async (req, res) =>{
  const data = {
    username: req.body.usernameRegister,
    password: req.body.passwordRegister
  };

  await collection.insertMany([data]);

  res.render('pages/feed');  // Dit moet correct verwijzen naar 'views/pages/feed.ejs'
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
