'use strict';
'use strict';
require('dotenv').config();
const Input = require('./lib/input.js');
const mongoose = require('mongoose');
const Note = require('./lib/note.js');
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const options = new Input();
const note = new Note(options);
// console.log(note);
