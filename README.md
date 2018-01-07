# ESLint Rules 早見表

最新のESLint Rulesおよび各Ruleのオプションについては公式ページを参照してください。
https://eslint.org/docs/rules/

## Possible Errors

### [for-direction](https://eslint.org/docs/rules/for-direction)

for文の更新式が正しい方向に動作する事を強制します。

```js
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

```js
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
}
```

### [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)

awaitをループ処理の中で使用する事を禁止します。

```js
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

```js
// NG
var i = 0
if (i === -0) {
  console.log(i)
}
```

### [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)

条件式に代入式を挿れる事を禁止します。

```js
// NG
const obj = {}
if (obj.hoge = true) {
  console.log(i)
}
```

### [no-console](https://eslint.org/docs/rules/no-console)

consoleを使用する事を禁止します。
consoleはproduction環境にプッシュされる前に除去されるべきです。

```js
// NG
console.log('log')
console.warn('warn')
console.error('error'
```

### [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)

条件式に定数（例えば、リテラル）を挿れる事を禁止します。

```js
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

```js
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

```js
// NG
function hoge () {
  debugger
  console.log('hoge')
}
```

### [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)

関数定義の際に重複した引数を禁止します。

```js
// NG
function example (hoge, fuga, hoge) {
  console.log(hoge)
}
```

### [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)

オブジェクト定義の際に重複したキー名を禁止します。

```js
// NG
const obj = {
  key1: 'key1',
  key1: 'key2'
}
```

### [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)

switch文で重複したケースラベルを禁止します。

```js
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

```js
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

```js
// NG
var hoge = /abc[]/

// OK
var fuga = /abc[a-z]/
```

### [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)

cache節の中で例外オブジェクトへの再代入を禁止します。
例外オブジェクトへの代替アクセスは存在しないので、再代入は完全に破壊的です。

```js
// NG
try {

} catch (e) {
  e = new Error()
}
```

### [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)

不要なBoolean型への変換を禁止します。
if文などの条件式では式の結果が強制的にBooleanになります。

```js
var example = 10

// NG
if (Boolean(example)) {

}
if (!!example) {

}

// OK
if (example) {

}
if (!example) {

}
```

### [no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)

不要な括弧を禁止します。

```js
// NG
var total = (10 * 20) - 30
```

### [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)

不要なセミコロンを禁止します。
不要なセミコロンは技術的なエラーではないですが、コードを読む際に混乱を招きます。

```js
// NG
var example = 5;;

function example () {
  console.log('sample')
};
```

### [no-func-assign](https://eslint.org/docs/rules/no-func-assign)

関数に対して再代入を禁止します。

```js
// NG
function example () {
  console.log('before')
}
example = true
```

### [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)

ブロック内での関数宣言を禁止します。ただし、ブロック内での関数式は許容されます。

```js
// NG
if (true) {
  function example () {
    console.log('example')
  }
}

// OK
if (true) {
  var example = function () {
    console.log('example')
  }
}
```

### [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)

`RegExp`コンストラクタで無効な正規表現を指定する事を禁止します。
これは正規表現リテラルを使用した際にはコードをパースした際に`SyntaxError`が発生するのに対し、`RegExp`オブジェクトの場合はコードが実行された時に`SyntaxError`が発生するためです。

```js
// NG
var regexp = new RegExp('[')
```

### [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)

無効なホワイトスペースを禁止します。
無効、または不規則なホワイトスペースはECMAScript5のパーサーで問題を引き起こし、コードのデバッグを困難にします。

```js
// NG
function thing() {
    return 'test'; /*<ENSP>*/
}
function thing() {
    return `template <NBSP>string`;
}
```
