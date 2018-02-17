// NG
let numList = [1, 2, 3].map((item) => {
  item * item
})

// OK
let numList = [1, 2, 3].map((item) => {
  return item * item
})