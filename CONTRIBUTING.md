# How to add tests

Go to `tests.js`. Follow the current structure. Please only add tests from specs that are reasonably stable.
They don't have to be a CR, just not too much in Flux.

- Don't add the same syntax as CSS 2.1.
- Don't add tests that already exist, just with different values. E.g. if `calc(1px + 2px)` is a testcase, adding `calc(2px + 2px)` won't help.
