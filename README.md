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

`debugger`文を使用する事を禁止します。
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

`return`, `throw`, `continue`, `break`文において到達不能なコードを禁止します。

```js
// NG
function hoge () {
  return 'hoge'
  console.log('hoge')
}
```

### [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)

`return`, `throw`, `continue`, `break`文を`fanally`ブロックに定義する事を禁止します。
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

Arrayメソッドのコールバック関数で`return`文の記述を強制します。

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

### [consistent-return](https://eslint.org/docs/rules/consistent-return)

`return`文が常に何かを返すか、常に何も返さない事を強制します。

```js
// NG
function something1 (i) {
  if (i === 1) {
    return 'foo'
  } else {
    return
  }
}

// OK
function something2 (i) {
  if (i === i) {
    return 'foo'
  } else {
    return 'bar'
  }
}
function something3 (i) {
  if (i === i) {
    return
  }
}
```

### [curly](https://eslint.org/docs/rules/curly)

中括弧を使用する事を求めます。
JavaScriptではブロック内に文が１つしか存在しない場合は中括弧を省略する事ができますが、これはバグの原因になったり、コードの明瞭性が低くなるため、中括弧を省略しない事がベストプラクティスと見なされています。

```js
// NG
if (foo) return 'foo'

// OK
if (foo) {
  return 'foo'
}
```

### [default-case](https://eslint.org/docs/rules/default-case)

switch文において`default`Caseを明示する事を要求します。
`default`Caseを常に明示する事は開発者の意図を明確にするために良い事だと考えられています。

```js
// NG
switch (foo) {
  case 1:
    console.log('foo is 1')
    break
  case 2:
    console.log('foo is 2')
    break
}

// OK
switch (foo) {
  case 1:
    console.log('foo is 1')
    break
  case 2:
    console.log('foo is 2')
    break
  default:
    break
}

switch (foo) {
  case 1:
    console.log('foo is 1')
    break
  case 2:
    console.log('foo is 2')
    break
  // no default
}
```

### [dot-location](https://eslint.org/docs/rules/dot-location)

ドット(.)の前後に改行を入れる事を要求します。
ドットの位置に一貫性がある事で読みやすさが向上します。

```js
/* eslint dot-location: ["error", "object"] */
// NG
let property = object
  .property

// OK
let property = object.
  property
let property = object.property

/* eslint dot-location: ["error", "property"] */
// NG
let property = object.
  property

// OK
let property = object
  .property
let property = object.property
```

### [dot-notation](https://eslint.org/docs/rules/dot-notation)

オブジェクトのプロパティにアクセスする際にはドット表記法を要求します。
JavaScriptではブラケット表記法でもオブジェクトのプロパティにアクセスできますが、ドット表記法の方が読みやすさや圧縮効率に優れています。

```js
// NG
let foo = object['property']

// OK
let foo = object.property

let propertyName = 'property'
let foo = object[propertyName]
```

### [eqeqeq](https://eslint.org/docs/rules/eqeqeq)

`==`と`!=`の代わりに`===`と`!==`を要求します。
`==`と`!=`は曖昧で問題を見つけるのが難しいため、`===`と`!==`の方が型安全で良い習慣です。

```js
// NG
if (foo == 'foo') {

}

// OK
if (foo === 'foo') {
  
}
```
### [guard-for-in](https://eslint.org/docs/rules/guard-for-in)

`for in`文を利用する時に`if`文で精査する事を要求します。
`for in`はプロトタイプチェーンで継承されたプロパティもループに含めるため、意図しないプロパティを読み込んでしまう恐れがあるためです。

```js
// NG
for (const key in object) {
  console.log(key)
}

// OK
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    console.log(key)
  }
}
```

### [no-alert](https://eslint.org/docs/rules/no-alert)

`alert`関数を使用する事を禁止します。
`alert`や`confirm`、`prompt`関数で表示されるUIは、より適切なカスタムUIに置き換えられるべきです。また、デバッグに利用される事もあるため、productionでビルドする際には削除すべきです。

```js
// NG
alert('foo')
confirm('bar')
prompt('baz')
```

### [no-caller](https://eslint.org/docs/rules/no-caller)

`arguments.caller`と`arguments.callee`を使用する事を禁止します。
これらの関数は将来的にJavaScriptやECMAScript5のstrict modeで禁止されています。

```js
// NG
function foo () {
  console.log(arguments.caller)
  arguments.callee()
}
```

### [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)

lexical declarations（`let`, `const`, `function`, `class`）を`case`や`default`節内で使用する事を禁止します。
これら`switch`文全体で定義されているようにも見えますが、実際にはそのコードに到達した時のみしか初期化されないためです。

lexical declarationsを`case`で利用する場合は中括弧で囲みます。

```js
// NG
switch (something) {
  case 1:
    let foo = 'foo'
    break
  case 2:
    const bar = 'bar'
    break
  case 3:
    function baz () {
      console.log('baz')
    }
    break
  default:
    class qux {
    }
}

// OK
switch (something) {
  case 1: {
    let foo = 'foo'
  }
  case 2: {
    const bar = 'bar'
  }
  case 3: {
    function baz () {
      console.log('baz')
    }
  }
  default: {
    class qux {
      
    }
  }
}
```

### [no-div-regex](https://eslint.org/docs/rules/no-div-regex)

正規表現の先頭での除算演算子を許可しません

```js
// NG
let foo = /=foo/

// OK
let foo = /\=foo/
```

### [no-else-return](https://eslint.org/docs/rules/no-else-return)

`else`の前に`return`する事を禁止します。
これは`return`文をブロックの外に出す事が出来るためです。

```js
// NG
function something () {
  if (foo) {
    return 'foo'
  } else {
    return 'bar' 
  }
}

// OK
function something () {
  if (foo) {
    return 'foo'
  }
  return 'bar'
}
```

### [no-empty-function](https://eslint.org/docs/rules/no-empty-function)

空の関数を禁止します。意図的に定義する場合はコメントを記述します。

```js
// NG
function empty () {

}

// OK
function empty () {
  // do nothing.
}
```

### [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)

空のデストラクチャパターンを禁止します。
多くの場合はデフォルト値を指定する際の記述ミスです。

```js
// NG
let {property: {}} = object

// OK
let {property = {}} = object
```

### [no-eq-null](https://eslint.org/docs/rules/no-eq-null)

`null`を比較する時には厳密比較を要求します。
これは意図しない比較による潜在的なバグを防ぐためです。

```js
// NG
if (foo == null) {

}
if (foo != null)

// OK
if (foo === null) {

}
if (foo !== null) {

}
```

### [no-eval](https://eslint.org/docs/rules/no-eval)

`eval`関数の使用を禁止します。
`eval`関数は危険であり、悪用される可能性があるためです。

```js
// NG
var foo  = eval('{a: 1, b: 2}')
```

### [no-extend-native](https://eslint.org/docs/rules/no-extend-native)

ビルトインオブジェクトを拡張する事を禁止します。

```js
// NG
Object.prototype.foo = 'foo'
```

### [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)

不要な`bind`関数を禁止します。

```js
// NG
let foo = function () {
  console.log('bar')
}.bind(this)

let foo = function () {
  (function () {
    console.log(this.bar)
  })
}.bind({bar: 'bar'})

// OK
let foo = function () {
  console.log(this.bar)
}.bind({bar: 'bar'})
```

### [no-extra-label](https://eslint.org/docs/rules/no-extra-label)

不要なラベルを禁止します。

```js
// NG
LOOP1: while(true) {
  break LOOP1
}

// OK
LOOP1: while(true) {
  while (true) {
    break LOOP1
  }
}
```

### [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)

`case`文でのフォールスルーを禁止します。
意図的にフォールスルーを使う場合はコメントを記述します。

```js
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
```

### [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)

小数点の前の数字を省略する事を禁止します。
これは数字とdot表記を区別しやすくするためです。

```js
// NG
let decimal = .1

// OK
let decimal = 0.1
```

### [no-global-assign](https://eslint.org/docs/rules/no-global-assign)

読み取り専用のグローバル変数への代入を禁止します。

```js
// NG
window = false
Object = {}
undefined = 'undefined'
```

### [no-implicit-coercion](https://eslint.org/docs/rules/no-implicit-coercion)

短記法による暗黙的な型変換を禁止します。型変換をする場合は明示的な方法を使います。

```js
// NG
let isFoo = !!foo

if (~foo.indexOf(0)) {

}

// OK
let isFoo = Boolean(foo)

if (foo.indexOf(0) !== -1) {

}
```

### [no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)

グローバルスコープで変数と関数を宣言する事を禁止します。
意図的にグローバルに宣言する場合は`window`や`self`を明示します。

```js
// NG
function foo () {}
var foo = 'foo'

// OK
window.foo = function () {}
self.foo = 'foo'
```

### [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)

暗黙的な`eval()`を禁止します。
`setTimeout()`、`setInterval()`、`execScript()`の第一引数に文字列を指定した場合に暗黙的に`eval()`が実行されてしまいます。（Internet Explorer only）

```js
// NG
setTimeout(`function () {
  console.log("foo") 
}`, 1000)
```

### [no-invalid-this](https://eslint.org/docs/rules/no-invalid-this)

`this`キーワードをクラスやクラスのようなオブジェクトの外側で使用する事を禁止します。
`strict mode`の場合、上記のケースで`this`は`undefined`になり、`TypeError`を発生させる可能性があります。

```js
// NG
this.foo = 'foo'

function func () {
  this.foo = 'foo'
}

let foo = () => {
  this.foo = 'foo'
}

// OK
function Func () {
  this.foo = 'foo'
}

class Foo {
  constructor () {
    this.foo = 'foo'
  }
}
```

### [no-iterator](https://eslint.org/docs/rules/no-iterator)

非推奨の`__iterator__`プロパティを禁止します。
ES6のIteratorとGeneratorを代わりに使用します。

```js
// NG
Foo.prototype.__iterator__ = function () {}
```

### [no-labels](https://eslint.org/docs/rules/no-labels)

`label`文を禁止します。
`label`はあまり使われない傾向がありますが、制御フローを理解しにくく、エラーが発生しやすいためです。

```js
// NG
label:
  while(foo) {
    while (bar) {
      break label
    }
  }

// OK
while(foo) {
  while (bar) {
    break
  }
  break
}
```

### [no-lone-blocks](https://eslint.org/docs/rules/no-lone-blocks)

不要にネストされたブロックを禁止します。

```js
// NG
{
  var foo = 'foo'
}

// OK
{
  let foo = 'foo'
}
```

### [no-loop-func](https://eslint.org/docs/rules/no-loop-func)

ループの中で関数宣言、関数式の利用を禁止します。
これは状況によって予期しない動作をする可能性があるためです。

```js
// NG
var funcs = []
for (var i = 0; i < 10; i++) {
  funcs[i] = function () {
    return i
  }
}

for (var i = 0; i < 10; i++) {
  function foo () {
    console.log(i)
  }
  foo()
}

// OK
var funcs = []
for (let i = 0; i < 10; i++) {
  funcs[i] = function () {
    return i
  }
}
for (let i = 0; i < 10; i++) {
  function foo () {
    console.log(i)
  }
  foo()
}
```

### [no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)

マジックナンバーを禁止します。
マジックナンバーは名前付き定数で宣言する事によって読みやすく、リファクタリングもしやすくなります。

```js
// NG
let array = ['foo', 'bar', 'baz']
console.log(array[2])

// OK
let array = ['foo', 'bar', 'baz']
let index = 2
console.log(array[index])
```

### [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)

条件式、宣言、配列、オブジェクト、シーケンス、関数パラメーターの周りで複数の空白を指定する事を禁止します。

```js
// NG
if (foo  === 'foo') {

}
function foo  () {

}
const foo = [1,  2, 3]
```

### [no-multi-str](https://eslint.org/docs/rules/no-multi-str)

複数行の文字列を禁止します。
`\`を改行の前に指定する事で複数行の文字列を作る事ができますが、これは元々JavaScriptに公式に規定されたものではなかったため、悪い習慣だと考える人がいるためです。

```js
// NG
let foo = 'foo \
  bar \
  baz'

// OK
let foo = 'foo \n' +
  'bar \n' +
  'baz'
```

### [no-new](https://eslint.org/docs/rules/no-new)

変数に代入しないインスタンスの生成（`new`）を禁止します。
変数に代入しない場合の多くはコンストラクタを必要とせず、関数に置き換える事ができます。

```js
// NG
new Foo()

// OK
let foo = new Foo()
foo()
```

### [no-new-func](https://eslint.org/docs/rules/no-new-func)

`Function`コンストラクタの使用を禁止します。
`Function`は可読性が低く、デバッグが困難なために悪い習慣だと考えられています。

```js
// NG
let func = new Function('a', 'b', 'return a + b')
```

### [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)

`new String`, `new Number`, `new Boolean`の使用を禁止します。
これらはプリミティブな値を生成せず、実際にはObjectが生成されるため、開発者の混乱を招く可能性があるためです。

```js
// NG
let str = new String('str')
let num = new Number(1)
let bool = new Boolean(false)
```

### [no-octal](https://eslint.org/docs/rules/no-octal)

8進数の表記を禁止します。8進数の表記はEcmaScript5で廃止され、strictモードではエラーになります。

```js
// NG
let foo = 071
```

### [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)

8進数のエスケープシーケンスの使用を禁止します。

```js
// NG
let foo = "Copyright \251";

// OK
let foo = "Copyright \u00A9"; 
```

### [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)

関数パラメーター（引数）への再代入を禁止します。
これは開発者が意図しないエラーが発生する事を防止するためです。

```js
// NG
function doSomething(arg) {
  arg = 'foo'
}

// OK
function doSomething(arg) {
  let foo = arg
  foo = 'foo'
}
```

### [no-proto](https://eslint.org/docs/rules/no-proto)

`__proto__`を使用する事を禁止します。
`__proto__`はEcmaScript 3.1以降廃止されたので、代わりに`getPrototypeOf`を使用してください。

```js
// NG
let proto = obj.__proto__

// OK
let proto = Object.getPrototypeOf(obj)
```

### [no-redeclare](https://eslint.org/docs/rules/no-redeclare)

同じスコープ内で同名の変数を宣言する事を禁止します。

```js
// NG
var foo = 'foo1'
var foo = 'foo2'

// OK
var bar = 'bar1'
bar = 'bar2'
```

### [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)

指定されたオブジェクトプロパティの使用を禁止する事ができます。

```js
/*
"no-restricted-properties": [2, {
  "object": "obj",
  "property": "prop"
}]
*/

// NG
let obj = {}
console.log(obj.prop)
```

### [no-return-assign](https://eslint.org/docs/rules/no-return-assign)

`return`文で代入を行う事を禁止します。
これは開発者の混乱を招き、エラーを発生させる恐れがあるためです。

```js
// NG
function doSomething() {
  return a = 1 + 2
}
```

### [no-return-await](https://eslint.org/docs/rules/no-return-await)

`return await`文を禁止します。
これは`async function`を理解しておらず実際には役に立たない処理になるためです。

```js
// NG
async function doSomething() {
  return await foo()
}

// OK
async function doSomething() {
  await foo()
  return
}
```

### [no-script-url](https://eslint.org/docs/rules/no-script-url)

JavaScript擬似プロトコル`javascript:`を禁止します。

```js
// NG
location.href = 'javascript:void(0)'
```

### [no-self-assign](https://eslint.org/docs/rules/no-self-assign)

自身への割り当てを禁止します。

```js
// NG
window = window
```

### [no-self-compare](https://eslint.org/docs/rules/no-self-compare)

自身との比較を禁止します。

```js
// NG
if (foo === foo) {
  
}
```

### [no-sequences](https://eslint.org/docs/rules/no-sequences)

以下の例外を除いて、カンマ演算子の使用を禁止します。

- for文の初期化もしくは更新部分
- 式の順序が明示的かつ括弧で囲まれている場合

```js
// NG
foo = doSomething(), val

// OK
foo = (doSomething(), val)
```

### [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)

例外発生時に`Error`オブジェクトをthrowする事を求めます。
これは例外処理に一貫性を持たせるためです。

```js
// NG
throw 1
throw { error: true }

// OK
throw new Error()
throw new Error('error')
```

### [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)

ループの条件が変更されない事を禁止します。
これは開発者の間違いの可能性があるためです。

```js
// NG
while (node) {
  doSomething(node);
}

// OK
while (node) {
  doSomething(node);
  node = node.parent;
}
```

### [no-unused-expressions](https://eslint.org/docs/rules/no-unused-expressions)

使用されない式を禁止します。

```js
// NG
function doSomething() {
  foo + 1
}

// OK
function doSomething() {
  return foo + 1
}
```

### [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)

未使用のラベル禁止します。

```js
// NG
A: var foo = 0;

// OK
A: {
  if (foo()) {
      break A;
  }
  bar();
}
```

### [no-useless-call](https://eslint.org/docs/rules/no-useless-call)

不要な`.call()`と`.apply()`を禁止します。
これらは関数呼び出しに使えますが、通常の関数呼び出しより遅くなります。

```js
// NG
foo.call(undefined, 1, 2, 3);
foo.call(null, 1, 2, 3);
obj.foo.call(obj, 1, 2, 3);

// OK
foo.call(obj, 1, 2, 3);
obj.foo.call(null, 1, 2, 3);
obj.foo.call(otherObj, 1, 2, 3);
```

### [no-useless-concat](https://eslint.org/docs/rules/no-useless-concat)

不要な文字の連結を禁止します。

```js
// NG
var a = `some` + `string`;
var a = '1' + '0';

// OK
var c = a + b;
var c = '1' + a;
var a = 1 + '1';
```

### [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)

不要なエスケープを禁止します。

```js
// NG
"\'";
`\"${foo}\"`;
`\#{foo}`;

// OK
"\"";
`\${${foo}}`;
`$\{${foo}}`;
```

### [no-useless-return](https://eslint.org/docs/rules/no-useless-return)

不要な`return`文を禁止します。

```js
// NG
function foo() {
  doSomething();
  return;
}

// OK
function foo() {
  return doSomething();
}
```

### [no-void](https://eslint.org/docs/rules/no-void)

`void`演算子を禁止します。
いくつかのコーディングスタイルでは、`void`演算子は読みにくいものとされています。

```js
// NG
void foo
var foo = void bar();
```

### [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)

警告コメントを禁止します。
警告コメントは多くの場合、本番環境に適用する前に削除されるべきです。

```js
// NG
function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // TODO
}

// OK
function callback(err, results) {
  if (err) {
    console.error(err);
    return;
  }
  // NOT READY FOR PRIME TIME
  // but too bad, it is not a predefined warning term
}
```

### [no-with](https://eslint.org/docs/rules/no-with)

`with`文の使用を禁止します。
`with`文の利用は非推奨であり、EcmaScript5の`strict`モードでは禁止されています。

```js
// NG
with (point) {
  r = Math.sqrt(x * x + y * y);
}

// OK
const r = ({x, y}) => Math.sqrt(x * x + y * y);
```

### [prefer-promise-reject-errors](https://eslint.org/docs/rules/prefer-promise-reject-errors)

Promiseでrejectする場合は、`Error`オブジェクトを設定する事を求めます。

```js
// NG
Promise.reject("something bad happened");
Promise.reject();

// OK
Promise.reject(new Error("something bad happened"));
Promise.reject(new TypeError("something bad happened"));
```

### [radix](https://eslint.org/docs/rules/radix)

`parseInt`関数を使用する場合は、基数（radix）の指定を求めます。
これは、EcmaScript5以前まで`0`で始まる数字の文字列を8進数として解釈してしまう事があり、開発者の意図しない動作を防ぐためです。

```js
// NG
var num = parseInt("071");
var num = parseInt(someValue);

// OK
var num = parseInt("071", 10);
var num = parseInt("071", 8);
```

### [require-await](https://eslint.org/docs/rules/require-await)

`await`を持たない`async`関数を禁止します。
これはリファクタリングなどで意図しない結果になる事を防ぎます。

```js
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
```

### [vars-on-top](https://eslint.org/docs/rules/vars-on-top)

変数宣言をスコープの先頭で行う事を強制します。
これはJavaScriptインタプリタが自動的に行うホイスティングを実装者に意識させます。

```js
// NG
function doSomething() {
  var a = 1
  console.log(a)
  var b = 2
}

for (var i = 0; i < 10; i++) {
  console.log(i)
}

// OK
function doSomething() {
  var a = 1
  var b = 2
  console.log(a)
}

for (let i = 0; i < 10; i++) {
  console.log(i)
}
```

### [wrap-iife](https://eslint.org/docs/rules/wrap-iife)

即時関数（IIFE）を括弧で囲む事を強制します。
これは関数式が括弧がなくても実行される事に対し、関数宣言は括弧がない場合は実行されないためです。

```js
// NG
var x = function () { return { y: 1 } }()

// OK
var x = (function () { return { y: 1 } }())
```

### [yoda](https://eslint.org/docs/rules/yoda)

ヨーダ記法を強制もしくは禁止します。
これは変数とリテラル値を比較する時のオペランドの位置に一貫性を持たせるためです。

```js
/* "yoda": "error" */
// NG
if ('red' === color) {

}

// OK
if (color === 'red') {

}

/* "yoda": ["error", "always"] */
// NG
if (color === 'red') {

}

// OK
if ('red' === color) {

}
```
