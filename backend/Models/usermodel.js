// usermodel.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: false, 
  },
  collegeName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  yearOfStudy: {
    type: Number,
    required: true,
    min: 1, 
    max: 4,
  },
  eventParticipation: {
    type: String,
    required: true,
    enum: ['Coding Competition', 'Prabuddha Campus Solution Challenge', 'Scrap-2-Design', 'Logo making Competition'], // Enforce valid event names
  },
  studentId: {
    type: String, 
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;