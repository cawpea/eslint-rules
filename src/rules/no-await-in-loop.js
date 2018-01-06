function doSomething (i) {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(i+1)
    }, 1000)
  })
}

// NG
async function ngHoge () {
  let dataList = []
  let data
  for (let i = 0; i < 10; i++) {
    data = await doSomething(i)
    dataList.push(data)
  }
  return dataList
}

// OK
async function okHoge () {
  let dataList = []
  for (let i = 0; i < 10; i++) {
    dataList.push(doSomething)
  }
  return await Promise.all(dataList)
}

(() => {
  console.log('start')
  // const dataList = ngHoge()
  const dataList = ngHoge()
  console.log(dataList)
})()