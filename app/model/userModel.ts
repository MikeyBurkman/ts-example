
import R = require('ramda');
import Bluebird = require('bluebird');

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

export async function getUser(id: string): Promise<User> {
  const userMatches: (user: User) => boolean = R.propEq('id', id);
  return Bluebird.delay(500)
    .then(() => R.find(userMatches, userStore));
}

export interface User {
  id: string,
  name: string
}

