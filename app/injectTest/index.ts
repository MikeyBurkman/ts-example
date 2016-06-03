
import Inject = require('../inject');

// This is just registering some basis instances so we can instantiate Foo
// You wouldn't do this normally.
// Due to us not lazily loading components, this needs to happen before we
//  import Bar
Inject.register(Boolean, []);
Inject.register(String, []);
Inject.addComponent(Boolean, true);
Inject.addComponent(String, 'abc');

import Bar from './bar';

export function init() {
  // Demonstrate that we can create a Bar instance from the constructor.
  // And due to structural typing, we don't even need to instantiate a Foo.
  const barNormal = new Bar({a: false, b: 'xyz'});
  console.log('Bar from normal instantiation: ', barNormal);

  const barInjected = Inject.load<Bar>(Bar);
  console.log('Bar from injected: ', barInjected);

  console.log('Initialized');
}
