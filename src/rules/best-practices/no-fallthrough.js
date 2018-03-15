// NG
switch (foo) {
  case 1:
    doSomething1()
  case 2:
    doSomething2()
}

// OK
switch (foo) {
  case 1:
    doSomething1()
    break
  case 2:
    doSomething2()
    break
}

switch (foo) {
  case 1:
    doSomething1()
    // fall through
  case 2:
    doSomething2()
}