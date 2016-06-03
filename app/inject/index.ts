
import "reflect-metadata";

// TODO: Right now all components have to be registered before anything is even imported.
// We need to make it lazy so that we don't actually instantiate anything until the
//  first time we call load()

const instances = {};

export function register(clz: any, params?: any[]) {
  const sym = Symbol('cmpId');
  clz['cmpId'] = sym;
}

export function addComponent(clz: any, instance: any) {
  const sym = clz['cmpId'];
  instances[sym] = instance;
}

export function load<T>(clz: any): T {
  const sym = clz['cmpId'];
  const val = instances[sym];
  if (!val) {
    throw new Error('Could not find registered component for type: ' + clz);
  }
  return val;
}

export function component(): ClassDecorator {
  return function(clz: any) {
    const parameterTypes = Reflect.getMetadata('design:paramtypes', clz);
    const parameterValues = parameterTypes.map(load);
    const instance = instantiate(clz, parameterValues);
    addComponent(clz, instance);
  }
}

function instantiate(clz, args) {
  var n = [undefined].concat(args);
  return new (clz.bind.apply(clz, n))();
}
