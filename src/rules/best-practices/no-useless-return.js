// NG
function foo() {
  doSomething();
  return;
}

// OK
function foo() {
  return doSomething();
}