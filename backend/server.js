const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());

// const uri = 'mongosh "mongodb+srv://cluster0.0ifwo.mongodb.net/" --apiVersion 1 --username zahidazkhan1412616'

// mongoose.connect(uri,{useNewUrlParser : true})

app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '..', 'prabuddha','build')));


app.get( '*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'prabuddha','build','index.html')); 
});


// router.post('api/register', userController.registerUser);






app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});



