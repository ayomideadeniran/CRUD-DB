const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Crowdsources:Crowdsource@cluster05.f8uuojm.mongodb.net/CRUD-DB';

mongoose.connect(connectionString, { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log('MongoDB Connection Established.');
  } else {
    console.log('Error in DB connection:', err);
  }
});

require('./student.model');


