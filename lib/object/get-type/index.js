export const OBJECT_TYPE_NAMES = [
  // Javascript objects
  'Array',
  'ArrayBuffer',
  'Blob',
  'Buffer',
  'Date',
  'Error',
  'FormData',
  'function',
  'HTMLElement',
  'Map',
  'Object',
  'Promise',
  'RegExp',
  'Set',
  'SharedArrayBuffer',
  'URL',
  'URLSearchParams',
  'DataView',
  'WeakMap',
  'WeakRef',
  'WeakSet',

  // Typed array names
  'Atomics',
  'BigInt64Array',
  'BigUint64Array',
  'Float32Array',
  'Float64Array',
  'Int16Array',
  'Int32Array',
  'Int8Array',
  'Uint16Array',
  'Uint32Array',
  'Uint8Array',
  'Uint8ClampedArray',

  // List of types that do not exist in Javascript
  'AsyncFunction', // Is a made up class to describe a Promise returned function
  'AsyncGenerator',
  'AsyncGeneratorFunction',
  'Generator',
  'GeneratorFunction',
  'NaN', // Is a value not a type
  'Observable', // This object is from rxjs
]

export { getType } from './get-type.js'
