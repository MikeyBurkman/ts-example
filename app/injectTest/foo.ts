
import {component} from '../inject';

@component()
export default class Foo {
  a: boolean;
  b: string;
  constructor(a: boolean, b: string) {
    this.a = a;
    this.b = b;
  }
}
