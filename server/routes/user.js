const express = require('express');

const router = new express.Router();

const User = require('../models/User');

router.post('/register',(req, res) => {
  User.register(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.post('/login', (req, res) => {
  User.authenticate(req.body, (err, token) => {
    if(err) {
      res.send("Username or Password is not valid.");
    } else {
      res.cookie('authtoken', token).send();
    }
  });
});

router.get('/manage', User.authMiddleware, (req,res) => {
  res.send(req.user);
});

router.put('/manage', User.authMiddleware, (req, res) => {
  User.findByIdAndUpdate(req.user._id, {$set: req.body}, {new: true}, (err,user) => {
    if(err) {
      return res.status(400).send(err);
    }else{
      return res.send(user);
    }
  });
});

router.post('/logout', (req, res) => {
  res.clearCookie('authtoken').send();
});



module.exports = router;
