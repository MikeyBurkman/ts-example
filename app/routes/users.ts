
import express = require('express');
import userModel = require('../model/userModel');

var router = express.Router();

router.get('/:id', async function(req, res, next) {
  try {
    let user = await userModel.getUser(req.params['id']);
    res.json({
      name: user.name,
      id: user.id,
      time: (new Date()).toISOString()
    });
  } catch (err) {
    next(err);
  }
});

export = router;
