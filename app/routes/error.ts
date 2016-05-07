
import express = require('express');

const router = express.Router();

router.get('/', function(req, res, next) {
  throw new Error('Error! In something!');
});

export = router;
