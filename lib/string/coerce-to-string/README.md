# `coerceString`

This function ensures that the argument is a string by converting `null` into an
empty string and throwing a `TypeError` if the argument is not a string. If the
argument is `undefined`, it will also throw a `TypeError`.
