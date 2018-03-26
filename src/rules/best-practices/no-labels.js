// NG
label:
  while(foo) {
    while (bar) {
      break label
    }
  }

// OK
while(foo) {
  while (bar) {
    break
  }
  break
}