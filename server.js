const express = require('express');
const connectDB = require('./config/db');

// const routes = require("./routes");
const app = express();

connectDB();

//init middleware
app.use(express.json({ exteneded: false }));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/example', require('./routes/api/example'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port' + PORT));
