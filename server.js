const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');

// const routes = require("./routes");
const app = express();

connectDB();

//init middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ exteneded: false }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// app.get('/', (req, res) => res.send('API Running'));

//Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/example', require('./routes/api/example'));

// Add routes, both API and view
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port' + PORT));
