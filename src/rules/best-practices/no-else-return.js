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

function something () {
  let result
  if (foo) {
    return 'foo'
  } else if (!foo) {
    result = 'bar'
  } else {
    return 'baz'
  }
  return result
}