const mongoose = require('mongoose');

const playerSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        age: {
            type: Number,
            require: true,
        },
        height: {
            type: Number,
        },
        numberShirt: {
            type: Number,
        },
        quote: {
            type: String,
        },
        joined: {
            type: String,
        },
        dateOfBirth: {
            type: String,
        },
        biography: {
            type: String,
        },
        position: {
            type: String,
        },
        country: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: false,
        },
    },
    { timestamps: true },
);

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
