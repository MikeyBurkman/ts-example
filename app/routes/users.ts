
import {Router} from 'express';

import * as userModel from '../model/userModel';
import {NotFoundError} from '../errors';

const router = Router();

// Use of async functions -- call promises and then await their results.
// This stuff requires compilation to >= es6
router.get('/:id', async function(req, res, next) {
  const id = req.params['id'];

  try {
    const user = await userModel.getUser(id);
    if (!user) {
      throw new NotFoundError();

    } else {
      return res.json({
        name: user.name,
        id: user.id,
        time: (new Date()).toISOString()
      });
    }
  } catch (err) {
    return next!(err);
  }
});

export = router;
