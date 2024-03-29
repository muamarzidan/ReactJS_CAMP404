const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routeAkses = require('./routes/book');
require('./config/db');


const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/book', routeAkses);


app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
});