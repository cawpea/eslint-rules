// NG
LOOP1: while(true) {
  break LOOP1
}

// OK
LOOP1: while(true) {
  while (true) {
    break LOOP1
  }
}