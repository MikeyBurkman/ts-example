
import express = require('express');
import user = require('../model/userModel');

var router = express.Router();

router.get('/:id', function(req, res, next) {
  user.getUser(req.params['id'])
    .then(user => res.render('user', {
      user: user,
      time: (new Date()).toISOString()
    }))
    .catch(err => next(err));
});

export = router;
