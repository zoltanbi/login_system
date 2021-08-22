// mongoDB
require('./config/db');

const app = require('express')();
const port = 3000;

// FOr accepting post form data
const bodyParser = require('express').json;
app.use(bodyParser());

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})
