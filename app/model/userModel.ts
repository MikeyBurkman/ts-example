
import R = require('ramda');
import Promise = require('bluebird');

const userStore = [{
  id: '1',
  name: 'Mikey'
}, {
  id: '2',
  name: 'Raphael'
}, {
  id: '3',
  name: 'Donatello',
}, {
  id: '4',
  name: 'Leonardo'
}];

export function getUser(id: string): Promise<User|undefined> {
  return Promise.delay(500)
    .then(() => find(id));
}

function find(id: string): Promise<User|undefined> {
  // Just add in a delay because we want to simulate async stuff
  return Promise.delay(500)
    .then(() => findImmediate(id));
}

function findImmediate(id: string): User|undefined {
  const userMatches: (user: User|undefined) => boolean = R.propEq('id', id);
  return R.find(userMatches, userStore);
}

export interface User {
  readonly id: string,
  readonly name: string
}
