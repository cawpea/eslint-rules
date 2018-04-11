// NG
async function doSomething() {
  return await foo()
}

// OK
async function doSomething() {
  await foo()
  return
}