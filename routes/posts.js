const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    // res.send('We are at posts');
    try {
        const post = await Post.find();
        
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    console.log(post);
    try {
        const savedpost = await post.save();
        res.json(savedpost);
    }
    catch (err) {
        console.log(err);
        res.json({ message : err});
    }
    // console.log(post);
    // post.save().then(data => {res.send(data);}).catch(err => {console.log(err); res.status(400).send('unable to save');});
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedpost = await Post.deleteOne({_id: req.params.id});
        res.json(deletedpost);
    }
    catch (err) {
        res.json({ message : err});
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const updatedpost = await Post.updateOne({_id: req.params.id}, {$set: {title: req.body.title}});
        res.json(updatedpost);
    }
    catch (err) {res.json({ message:err});}
});

module.exports = router;