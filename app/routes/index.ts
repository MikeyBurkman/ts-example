
import express = require('express');
const router = express.Router();

const getFirstLetters = (x: string) => x.slice(0, 2);

/* GET home page. */
router.get('/', function(req, res, next) {
  let it = f();
  let itAsArray = Array.from(it);
  res.json({
    values: itAsArray.map(getFirstLetters)
  });
});

function *f() {
  yield 'abc';
  yield 'def';
  yield * ['foo', 'bar', 'baz'];
}

export = router;
