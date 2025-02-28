// const express = require('express');
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 5000;


// app.use(express.json());

// // const uri = 'mongosh "mongodb+srv://cluster0.0ifwo.mongodb.net/" --apiVersion 1 --username zahidazkhan1412616'

// // mongoose.connect(uri,{useNewUrlParser : true})

// app.use(express.urlencoded({ extended: true }));


// app.use(express.static(path.join(__dirname, '..', 'prabuddha','build')));


// app.get( '*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'prabuddha','build','index.html')); 
// });


// // router.post('api/register', userController.registerUser);






// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });



const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const User = require('./Models/usermodel'); // Adjust path as needed

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
//const uri = 'mongosh "mongodb+srv://cluster0.0ifwo.mongodb.net/" --apiVersion 1 --username zahidazkhan1412616'; // Replace with your MongoDB URI
const uri = "mongodb+srv://cluster0.0ifwo.mongodb.net/"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Multer setup for file uploads
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname, '..', 'prabuddha', 'build')));

// API endpoint for registration
app.post('/api/register', upload.single('studentId'), async (req, res) => {
  try {
    const { name, email, collegeName, phoneNumber, yearOfStudy, eventParticipation } = req.body;
    const studentId = req.file.buffer; //get the file buffer

    const user = new User({
      name,
      email,
      collegeName,
      phoneNumber,
      yearOfStudy,
      eventParticipation,
      studentId: studentId,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user', details: error.message });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'prabuddha', 'build', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
