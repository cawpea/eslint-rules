// NG
switch (foo) {
  case 1:
    console.log('foo is 1')
    break
  case 2:
    console.log('foo is 2')
    break
}

// OK
switch (foo) {
  case 1:
    console.log('foo is 1')
    break
  case 2:
    console.log('foo is 2')
    break
  default:
    break
}

switch (foo) {
  case 1:
    console.log('foo is 1')
    break
  case 2:
    console.log('foo is 2')
    break
  // no default
}