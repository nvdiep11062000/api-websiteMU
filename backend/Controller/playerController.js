const express = require('express');
const router = express.Router();
const Player = require('../Model/playersModel');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
//SAVE A PRODUCT
router.post('/', async (req, res) => {
    try {
        const player = await Player.create(req.body);
        res.status(200).json(player);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

//GET ALL PLAYER
router.get('/', async (req, res) => {
    try {
        const player = await Player.find();
        res.status(200).json(player);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

//GET A PLAYER
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const player = await Player.findById(id);

        res.status(200).json(player);
        // if (!id) {
        //     return res.status(500).json({ message: `cannot find any player with ID ${id}` });
        // }
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

//UPDATE A PLAYER
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const player = await Player.findByIdAndUpdate(id, req.body);
        if (!player) {
            return res.status(500).json({ message: `cannot find any product with ID ${id}` });
        }
        const updatePlayer = await Player.findById(id);
        res.status(200).json(updatePlayer);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

//DELETE A PLAYER
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const player = await Player.findByIdAndDelete(id);
        if (!player) {
            return res.status(500).json({ message: `cannot find any product with ID ${id}` });
        }
        res.status(200).json(player);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
module.exports = router;
