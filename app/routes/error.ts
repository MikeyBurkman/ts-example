
import {Router} from 'express';

const router = Router();

router.get('/', function(req, res, next) {
  throw new Error('Error! In something!');
});

export = router;
