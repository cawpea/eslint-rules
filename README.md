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

### [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)

グローバルオブジェクトを関数として呼び出す事を禁止します。
EcmaScriptは大文字のグローバルオブジェクトを提供しますが、それらは関数で実行するとエラーになります。

```js
// NG
Math()
var json = JSON()
var reflect = Reflect()
```

### [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)

`Object.create`で生成したオブジェクトに対して、`Object.prototypes`のメソッドを直接呼ぶ事を禁止します。

```js
var parent = function () {
  return this
}
parent.prototype.hoge = function () {
  console.log('hoge')
}

var child = Object.create(parent)

// NG
var hasHoge = child.hasOwnProperty('hoge')

// OK
var hasHoge = Object.hasOwnProperty.call(child, 'hoge')
```

### [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)

正規表現の中で複数のスペースを禁止します。
正規表現はミスを無くすために出来るだけシンプルに保つべきです。

```js
// NG
var regex = /Hell   World/
var regex = new RegExp("Hello   World")

// OK
var regex = /Hell {3}World/
var regex = new RegExp("Hello {3}World")
```

### [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)

空の配列を作成するためにスパース配列を使用する事を禁止します。
スパース配列は実装者の意図が分かりにくくし、混乱を招きます。

```js
// NG
var array1 = [,,]
var array2 = ['red',,'blue']

// OK
var array1 = new Array(3)
var array2 = ['red', 'blue', ] // 最後のカンマはOK
```

### [no-template-curly-in-string](https://eslint.org/docs/rules/no-template-curly-in-string)

通常文字列の中でテンプレート文字列のプレースホルダーの使用を禁止します。
テンプレート文字列と間違って通常文字列を使用してしまう事を防止します。

```js
// NG
var str1 = "Hello ${wld}"
var str2 = 'Hello ${wld}'
```

### [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)

紛らわしい複数行のコードを禁止します。
改行文字はいくつかのルールを除いて自動セミコロン挿入により文を終了します。

```js
// NG
var foo = bar
(1 || 2).baz();

// OK
var foo = bar;
(1 || 2).baz();
```

### [no-unreachable](https://eslint.org/docs/rules/no-unreachable)

`return`, `throw`, `continue`, `break`ステートメントにおいて到達不能なコードを禁止します。

```js
// NG
function hoge () {
  return 'hoge'
  console.log('hoge')
}
```

### [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)

`return`, `throw`, `continue`, `break`ステートメントを`fanally`ブロックに定義する事を禁止します。
これは`try~catch`構文において予期しない動作を防止するためです。

```js
// NG
try {
  return 1
} catch (e) {
  return 2
} finally {
  return 3
}
```

### [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)

関係演算子の左オペランドにおいて否定する事を禁止します。
これは開発者の意図と異なる動作をする可能性があるためです。

```js
// NG
if (!hoge in obj) {
  
}
if (!hoge instanceof Object) {

}

// OK
if (!(hoge in obj)) {

}
if (!(hoge instanceof Object)) {
  
}
```

### [use-isnan](https://eslint.org/docs/rules/)

`NaN`を判定する時には`isNaN()`を使用する事を求めます。
これは`NaN`を比較した場合の結果が混乱を招くためです。

```js
// NG
if (hoge === NaN) {

}

// OK
if (isNaN(hoge)) {
  
}
```

### [valid-jsdoc](https://eslint.org/docs/rules/valid-jsdoc)

JSDocのコメントを記述する事を強制します。

```js
// NG
/**
 * Add two numbers.
 * @param {number} num The first number.
 * @returns The sum of the two numbers.
 */
function add(num1, num2) {
  return num1 + num2;
}

// OK
/**
 * Add two numbers.
 * @param {number} num1 The first number.
 * @param {number} num2 The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(num1, num2) {
  return num1 + num2;
}
```

### [valid-typeof](https://eslint.org/docs/rules/valid-typeof)

`typeof`で比較する時の文字列が有効である事を強制します。

```js
// NG
if (typeof hoge === 'undefiend') {

}
if (typeof hoge === 'stirng') {

}

// OK
if (typeof hoge === 'undefined') {

}
if (typeof hoge === 'object') {

}
```

## Best Practices

### [accessor-pairs](https://eslint.org/docs/rules/accessor-pairs)

set構文のペアとなるget構文の定義を強制します。

```js
// NG
var object = {
  set foo (val) {
    this.val = val
  }
}

// OK
var object = {
  set foo (val) {
    this.val = val
  },
  get foo () {
    return this.val
  }
}
```

### [array-callback-return](https://eslint.org/docs/rules/array-callback-return)

Arrayメソッドのコールバック関数で`return`の記述を強制します。

```js
// NG
let numList = [1, 2, 3].map((item) => {
  item * item
})

// OK
let numList = [1, 2, 3].map((item) => {
  return item * item
})
```

### [block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)

`var`変数をブロック外で使用した時に警告します。
これはホイスティングによるバグを避けるためです。

```js
// NG
function something () {
  if (true) {
    var foo = 'hello'
  }
  console.log(foo)
}

// OK
function something () {
  var foo
  if (true) {
    foo = 'hello'
  }
  console.log(foo)
}
```

### [class-methods-use-this](https://eslint.org/docs/rules/class-methods-use-this)

classメソッドが`this`を利用する事を強制します。
`this`を利用しない場合は、静的関数(static)として定義する事ができます。

```js
// NG
class Something {
  constructor () {
    this.num = 1
  }
  print () {
    console.log(1)
  }
}

// OK
class Something {
  constructor () {
    this.num = 1
  }
  static print () {
    console.log(1)
  }
}
class Something {
  constructor () {
    this.num = 1
  }
  print () {
    console.log(this.num)
  }
}
```

### [complexity](https://eslint.org/docs/rules/complexity)

複雑度に制限を設けます。

```js
// NG: eslint complexity: ["error", 2]
function something (i) {
  if (i === 1) {
    console.log('foo') // 1
  } else if (i === 2) {
    console.log('bar') // 2
  } else {
    console.log('baz') // 3
  }
}
```
