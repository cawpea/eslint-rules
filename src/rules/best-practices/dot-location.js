/* eslint dot-location: ["error", "object"] */
// NG
let property = object
  .property

// OK
let property = object.
  property
let property = object.property

/* eslint dot-location: ["error", "property"] */
// NG
let property = object.
  property

// OK
let property = object
  .property
let property = object.property