# ESLint Rules 早見表

これは2018/01/06時点で列挙されたESLint Rulesです。
また、各ルールのオプションについては公式ページを参照してください。
https://eslint.org/docs/rules/

## Possible Errors

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

### [no-control-regex](https://eslint.org/docs/rules/no-control-regex)

正規表現の中で制御文字を指定する事を禁止します。
正規表現の中で制御文字を使用する事は稀であり、ほとんどの場合は入力ミスです。

```
// NG
var pattern1 = /Hello¥x0aWorld/
var pattern2 = new RegExp("Hello¥x0aWorld")

// OK
var pattern1 = /Hello¥sWorld/
var pattern2 = new RegExp("Hello¥sWorld"
```

### [no-debugger](https://eslint.org/docs/rules/no-debugger)

`debugger`ステートメントを使用する事を禁止します。
`debugger`はデバッグのために使用するため、本番環境のコードに含むべきではありません。

```
// NG
function hoge () {
  debugger
  console.log('hoge')
}
```

### [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)

関数定義の際に重複した引数を禁止します。

```
// NG
function example (hoge, fuga, hoge) {
  console.log(hoge)
}
```

### [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)

オブジェクト定義の際に重複したキー名を禁止します。

```
// NG
const obj = {
  key1: 'key1',
  key1: 'key2'
}
```

### [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)

switch文で重複したケースラベルを禁止します。

```
// NG
switch (hoge) {
  case 1:
    console.log('This is case 1')
    break
  case 2:
    console.log('This is case 2')
    break
  case 1:
    console.log('This is case 3')
    break
}
```

### [no-empty](https://eslint.org/docs/rules/no-empty)

空のブロックを禁止します。
技術的には誤りではないですが、コードを読む際に混乱を招く可能性があります。

```
// NG
function example (x) {
  if (x) {
  }
  switch (x) {
  }
}
```

### [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)

正規表現の中で空のcharacter classes`[]`を使用する事を禁止します。
空の`[]`は何にもマッチしないため、おそらくタイプミスです。

```
// NG
var hoge = /abc[]/

// OK
var fuga = /abc[a-z]/
```