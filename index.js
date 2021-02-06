require('dotenv/config');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/contacts', require('./api/contacts/contacts.router'));

let PORT = process.env.PORT;
app.listen(
    PORT,
    () => console.log('Server is running on port ' + PORT)
)