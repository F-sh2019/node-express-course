require('dotenv').config();
const express = require('express');
const app = express();


app.use(express.json());

// Routes
const mainRouter = require('./routes/main');
app.use('/api/v0', mainRouter);

// Error Handling
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));


const port = process.env.PORT || 3000;
const start = async () => {
    try {
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
  