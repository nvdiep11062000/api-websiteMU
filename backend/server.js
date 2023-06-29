const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var cors = require('cors');
const productRouter = require('./Controller/productController');
const playerRouter = require('./Controller/playerController');
app.use(cors());
app.use(express.json());
dotenv.config();

app.use('/product', productRouter);
app.use('/player', playerRouter);

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log('Connected!'))
    .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
    console.log('Server is running at', process.env.PORT);
});
