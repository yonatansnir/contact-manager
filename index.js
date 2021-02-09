require('dotenv/config');
const cors = require('cors');
const express = require('express');

const app = express();
app.use(express.json());
app.use(cors());

const path = require('path');

app.use('/api/log', require('./api/log/log.router'));
app.use('/api/contacts', require('./api/contacts/contacts.router'));
app.use('/api/validation', require('./api/validation/validation.router'));

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

let PORT = process.env.PORT;
app.listen(
    PORT,
    () => console.log('Server is running on port ' + PORT)
)