
import {Router} from 'express';
const router = Router();

// Currying! Kind of!
const getFirstLetters = (n: number) => (x: string) => x.slice(0, n);

/* GET home page. */
router.get('/', function(req, res, next) {
  // Mess around with generator functions because why not.
  // This stuff compilation to >= es6
  let it = f();
  let itAsArray = Array.from(it);
  res.json({
    values: itAsArray.map(getFirstLetters(2))
  });
});

function *f() {
  yield 'abc';
  yield 'def';
  yield * ['foo', 'bar', 'baz'];
}

export = router;
