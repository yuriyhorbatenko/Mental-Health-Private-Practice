const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 5000;

//init middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use(routes);

connectDB();

app.listen(PORT, () => console.log('Server started on port' + PORT));
