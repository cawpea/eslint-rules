// NG
async function foo() {
  doSomething();
}

bar(async () => {
  doSomething();
});

// OK
async function foo() {
  await doSomething();
}

bar(async () => {
  await doSomething();
});