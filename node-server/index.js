const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// route imports
const nameRoutes = require('./routes/nameRoutes');

app.use('/api/name', nameRoutes);

app.listen(8000, () => {
    console.log("Listening to port 8000!")
})