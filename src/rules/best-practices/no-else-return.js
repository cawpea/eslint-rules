// NG
function something () {
  if (foo) {
    return 'foo'
  } else {
    return 'bar' 
  }
}

// OK
function something () {
  if (foo) {
    return 'foo'
  }
  return 'bar'
}