# ESLint Rules

これは2018/01/06時点で列挙されたESLint Rulesです。
また、各ルールのオプションについては公式ページを参照してください。
https://eslint.org/docs/rules/

## Rules

### [for-direction](https://eslint.org/docs/rules/for-direction)

for文の更新式が正しい方向に動作する事を強制します。

```
// NG
for (var i = 0; i < 10; i--) {
  console.log(i)
}

// OK
for (var i = 0; i < 10; i++) {
  console.log(i)
}
```

### [getter-return](https://eslint.org/docs/rules/getter-return)

get構文でreturnを記述する事を強制します。

```
// NG
var hoge = {
  get name () {
    console.log('hoge')
  }
}

// OK
var hoge = {
  get name () {
    return 'hoge'
  }

```

### [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)

awaitをループ処理の中で使用する事を禁止します。

```
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
```

### [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)

-0と比較する事を禁止します。

```
// NG
var i = 0
if (i === -0) {
  console.log(i)
}
```

### [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)

条件式に代入式を挿れる事を禁止します。

```
// NG
const obj = {}
if (obj.hoge = true) {
  console.log(i)
}
```

### [no-console](https://eslint.org/docs/rules/no-console)

consoleを使用する事を禁止します。
consoleはproduction環境にプッシュされる前に除去されるべきです。

```
// NG
console.log('log')
console.warn('warn')
console.error('error'
```

### [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)

条件式に定数（例えば、リテラル）を挿れる事を禁止します。

```
// NG
if (false) {
  doSomethingForDevelopment()
}

// OK
if (env === 'development') {
  doSomethingForDevelopment()
}
```