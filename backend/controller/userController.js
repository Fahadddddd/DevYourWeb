const User = require('../Models/usermodel'); 


exports.registerUser = async (req, res) => {
  try {
    const user = new User(req.body); 
    await user.save(); 
    res.status(201).json({ message: 'User registered successfully', user: user }); 
  } catch (error) {
    console.error('Error registering user:', error);

    res.status(500).json({ error: 'Failed to register user', details: error.message });
  }
};







