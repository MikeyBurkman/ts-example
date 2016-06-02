
import express = require('express');

import userModel = require('../model/userModel');
import errors = require('../errors');

const router = express.Router();

router.get('/:id', async function(req, res, next) {
  const id = req.params['id'];

  try {
    let user = await userModel.getUser(id);

    if (!user) {
      throw new errors.NotFoundError();

    } else {
      return res.json({
        name: user.name,
        id: user.id,
        time: (new Date()).toISOString()
      });
    }
  } catch (err) {
    return next(err);
  }
});

export = router;
