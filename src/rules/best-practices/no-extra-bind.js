// NG
let foo = function () {
  console.log('bar')
}.bind(this)

let foo = function () {
  (function () {
    console.log(this.bar)
  })
}.bind({bar: 'bar'})

// OK
let foo = function () {
  console.log(this.bar)
}.bind({bar: 'bar'})
