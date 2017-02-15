import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user';
import Post from '../models/post';

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.route('/posts')
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    Post.find(function(err, posts) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(posts)
    });
  });

router.route('/users')
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    User.find(function(err, users) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(users)
    });
  });


module.exports = router;
