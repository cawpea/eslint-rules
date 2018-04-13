// NG
A: var foo = 0;

// OK
A: {
  if (foo()) {
      break A;
  }
  bar();
}