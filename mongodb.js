const mongoose = require('mongoose')

const mongoURI = `mongodb+srv://${process.env.MONGODBusername}:${process.env.MONGODBpassword}@ilm-navigator.wrzmb11.mongodb.net/${process.env.MONGODBserver}?retryWrites=true&w=majority`

mongoose.connect(mongoURI, {
}).then(() => {
  console.log('Connected to Database');
}).catch((error) => {
  console.error('Connection failed:', error);
})

const logIn = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const collection = mongoose.model('Collection1', logIn)

module.exports = collection
