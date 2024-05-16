# `deepTransformKeys`

Transforms the keys of an object recursively using a provided transformer function

## Usage

```
deepTransformKeys(object, transformer)
```

### object

Type: `object`

The object whose keys will be transformed.

### transformer

Type: `function`

The function used to transform each key.

### returns

Type: `object`

A new object with the transformed keys and the corresponding values from the original object.

### throws

Type: `TypeError`

If the input object is not an object or the transformer function is not a function.
