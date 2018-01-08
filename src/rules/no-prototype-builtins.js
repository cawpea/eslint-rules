var parent = function () {
  return this
}
parent.prototype.hoge = function () {
  console.log('hoge')
}

var child = Object.create(parent)

// NG
var hasHoge = child.hasOwnProperty('hoge')

// OK
var hasHoge = Object.hasOwnProperty.call(child, 'hoge')