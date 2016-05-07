
import express = require('express');
import userModel = require('../model/userModel');

const router = express.Router();

router.get('/:id', async function(req, res, next) {
  const id = req.params['id'];
  
  const resolve = (user: userModel.User) => {
    if (!user) {
      return res.status(404).json(null);
    }
    
    return res.json({
      name: user.name,
      id: user.id,
      time: (new Date()).toISOString()
    });
  };
  
  try {
    let user = await userModel.getUser(id);
    resolve(user);
  } catch (err) {
    next(err);
  }
});

export = router;
