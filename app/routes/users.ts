
import express = require('express');
import userModel = require('../model/userModel');

const router = express.Router();

router.get('/:id', async function(req, res, next) {
  const id = req.params['id'];

  try {
    let user = await userModel.getUser(id);

    if (!user) {
      return res.status(404).json(null);

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
