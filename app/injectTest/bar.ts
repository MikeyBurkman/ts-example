
import {component} from '../inject';

import Foo from './foo';

@component()
export default class Bar {
  foo: Foo;
  constructor(foo: Foo) {
    this.foo = foo;
  }
}
