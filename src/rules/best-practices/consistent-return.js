// NG
function something1 (i) {
  if (i === 1) {
    return 'foo'
  } else {
    return
  }
}

// OK
function something2 (i) {
  if (i === i) {
    return 'foo'
  } else {
    return 'bar'
  }
}
function something3 (i) {
  if (i === i) {
    return
  }
}