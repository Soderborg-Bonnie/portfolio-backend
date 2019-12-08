const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const dotenv = require('dotenv');

const server = express();

const Quotes = require('./models/quote-model');

server.use(helmet());
server.use(express.json());
server.use(cors());

dotenv.config();

const db = process.env.Mongo_URI;

mongoose.connect(db, { useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

server.get('/', (req, res) => {
  res.status(200).json({ message: "It's alive!" })
});

server.get(`/api/quotes`, (req, res) => {
  Quotes.find((err, quote) => {
    if(err){
      res.status(500).json(err);
    }
    res.status(200).json(quote)
  })
})

module.exports = server;