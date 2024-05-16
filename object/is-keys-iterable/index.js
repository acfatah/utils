export function isKeysIterable(object) {
  return typeof object === 'object'
    && object !== null
    && !(object instanceof Date)
    && !(object instanceof RegExp)
    && !(object instanceof Map)
    && !(object instanceof Set)
    && !(object instanceof WeakMap)
    && !(object instanceof WeakSet)
}
