const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;
const router = express.Router();
const bodyParser = require('body-parser');    
const registerRoute = require('./routers/register');
const loginRoute = require('./routers/login');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/LIBRARY');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB successfully!'); 
});


app.use(cors())  

app.use(bodyParser.json());

app.use('/api/register', registerRoute); 
app.use('/api/login',loginRoute ); 






module.exports = router;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

