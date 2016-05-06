
import Bluebird = require('bluebird');

export async function getUser(id: string): Promise<User> {
  if (id === 'null') {
    throw new Error('Something went wrong!');
  }
  return Bluebird.delay(500)
    .then(() => ({
      id: id,
      name: 'Mikey'
    }));
}

export interface User {
  id: string,
  name: string
}