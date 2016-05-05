
import Promise = require('bluebird');

export function getUser(id: string): Promise<User> {
  return Promise.delay(1500)
    .then(() => ({
      id: id,
      name: 'Mikey'
    }));
}

export interface User {
  id: string,
  name: string
}