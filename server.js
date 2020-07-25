const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');

const app = express();

connectDB();

//init middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

// Add routes, both API and view
app.use(routes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port' + PORT));

