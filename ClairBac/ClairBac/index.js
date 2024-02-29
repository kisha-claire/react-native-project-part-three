const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const { sequelize } = require('./models'); // Assuming you have a models folder with Sequelize configuration

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

// Connect to MySQL database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to MySQL database');
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MySQL database:', err);
  });
