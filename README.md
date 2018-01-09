# Copy Characters  [![Build Status](https://travis-ci.org/dcos-labs/copychars.svg?branch=master)](https://travis-ci.org/dcos-labs/copychars)
            
---
👩‍🔬  Please be aware that this package is still experimental —
changes to the interface  and underlying implementation are likely,
and future development or maintenance is not guaranteed.

---

This package provides a function to copy characters from a string.


## Example

```js

import copychars from "@dcos/copychars";

copychars("abc-123", 4, 3);  //123

```

## TODO

* [ ] Document how this function differs from `subsrt` and `slice` and why one 
 would want to use instead of the native implementations
* [ ] Add a  performance test to verify that the provided solution allows the 
 browser to _properly_ garbage collect strings


