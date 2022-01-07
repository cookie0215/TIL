# [TIL] JS_타입변환과 단축평가

<br />

### 타입 변환
1. 명시적 타입 변환 (explicit coercion)
- 개발자가 의도적으로 값의 타입을 변환하는 것
- type casting (타입 캐스팅)이라고도 함

<br>

2. 암묵적 타입 변환 (implicit coercion)
- 개발자 의도와 상관없이 **자바스크립트 엔진에 의해** 암묵적으로 타입이 자동 변환 되는 것
- type coercion (타입 강제 변환) 이라고도 함

<br>

> 참고) 명시적 또는 암묵적 타입 변환이 발생했다고 해서 기존 원시 값 자체가 변경되는 것은 아니다!  
> (원시값은 변경 불가능한 값이기 때문에 변경 불가능!)

```javascript
var abc = 10;

var xyz = abc + "20";
console.log(typeof xyz , xyz);    // string 1020

console.log(typeof abc , abc);   // number 10
```

<br>
<br>

## 암묵적 타입 변환 (implicit coercion)
- 자바스크립트 엔진은 표현식을 평가할 때 문맥, 즉 컨텍스트(Context)에 고려하여 암묵적 타입 변환을 실행

<br>

### 암묵적 1) 문자열 타입으로 변환
- 피연산자 중 하나 이상 문자열이 존재하면, `+` 는 문자열 연결 연산자의 기능을 하면서 결과값을 암묵적으로 문자열로 변환함 

```javascript
1 + '2'    // '12'
`3 + 2 = ${3+2}`
0 + ''     // '0'
[10,20] + ""   // "[10,20]"

console.log(`1 + 1 = ${1 + 1}`);  // "1 + 1 = 2"
// 리터럴표현식으로 작성하면 typeof 가 string이 출력되는 것을 볼 수 있다.

!0        // true >> 숫자0을 불리언 타입으로 변환
if (1) { }  // true >> 숫자1을 불리언 타입으로 변환

```

<br>
<br>

### 암묵적 2) 숫자 타입으로 변환
- 자바스크립트 엔진은 산술 연산자 표현식을 평가하기 위해 피연산자 중 숫자 타입이 아닌 피연산자를 암묵적으로 숫자타입으로 변환함
- 비교 연산자 또는 `+` 단항 연산자도 마찬가지로 암묵적으로 숫자타입으로 변환

> 단, 객체, 빈 배열이 아닌 값이 존재하는 배열, undefined 는 숫자타입으로 변환되지 않고 NaN 가 반환됨!!  
> null은 강제적으로 숫자 타입으로 변환 시, 0으로 반환된다!

<br>

```javascript
1 - '1'    // 0 >> number타입
1 * '10'   // 10
10 / '2'   // 5

10 / '이'   // NaN
// '이' 라는 피연산자를 숫자타입으로 변환할 수 없기 때문에 NaN가 반환됨

+ ''       // 0
+ '100'    // 100
+ true      // 1
+ false     // 0
+ null     // 0

+ undefined   // NaN
+ Symbol()    // TypeError 발생
+ {}          // NaN

+ []          // 0

+ [1,2,3]     // NaN
+ (function(){})  // NaN
```
→ Symbol()은 자동으로 형 변환이 발생하지 않기 때문에 err가 발생

<br>

```javascript

1 * null    // 0
1 * ''      // 0
1 / null      // Infinity
1 / ''     // Infinity
'' / 1       // 0

1 + true     // 2   >> true가 1로 변환되면서 연산이 된다.
```

<br>
<br>

### 암묵적 3) 불리언 타입으로 변환
- 자바스크립트 엔진은 불리언 타입이 아닌 값들을 Truthy 값(참으로 인식할 값) 또는 Falsy 값(거짓으로 인식할 값)으로 구분

> **< false로 변환되는 Falsy 값들 >**  
> - false  
> - undefined  
> - null  
> - 0, -0  
> - NaN  
> - `' '` (빈문자열)

<br>

***[예제] true값인지 false값인지 판별하는 함수***

```javascript
// isFalsy함수를 호출할 때 인자값이 Falsy 값이면 true, Truthy 값이면 false를 반환
function isFalsy(v) {
  return !v;
}

console.log(isFalsy(false));
console.log(isFalsy(undefined));
console.log(isFalsy(null));
console.log(isFalsy(0));
console.log(isFalsy(NaN));
console.log(isFalsy(''));

// 모두 true값을 반환하기 때문에 괄호안의 인자값들은 falsy값이다!
```
<br>

```javascript
// isTruthy함수를 호출할 때 인자값이 Truthy 값이면 true, Falsy 값이면 false를 반환
function isTruthy(v) {
  return !!v;
}

console.log(isTruthy('0'));  // 빈 문자열이 아닌 문자열은 Truthy 값이다.
console.log(isTruthy({}));
console.log(isTruthy([]));

// 모두 true값을 반환하기 때문에 위의 인자값들은 모두 Truthy 값!
```

<br>
<br>
<br>

## 명시적 타입 변환 (explicit coercion)
- 자바스크립트에서 기본 제공하는 함수를 이용해 의도적으로 타입을 변환 가능
  - 표준 빌트인 생성자 함수(String(),Number() ...etc)를 new 연산자 없이 호출하는 방법  
  -  표준 빌트인 메서드를 사용하는 방법  
    ( toString(),parseInt(), !!=>부정연산자 두 번 사용으로 논리형으로 변환하기 )

<br>

### 명시적 1) 문자열 타입으로 변환
- `String` 생성자 함수를 new 연산자 없이 호출하는 방법

```javascript
console.log(String(100));        // "100"
console.log(String(NaN));       // "NaN" 
console.log(String(true));     // "true" 
console.log(typeof String(Symbol()));  //string 반환
```
→ 사실 Symbol()는 자바스크립트 엔진에 의해 암묵적으로 문자열로 자동 형 변환되지 않지만, 개발자가 의도적으로 형변환은 시킬 수 있다!

<br>

- `Object.prototype.toString` 메소드를 사용하는 방법
```javascript
console.log((100).toString());        // "100"
console.log((NaN).toString());        // "NaN"
console.log((Infinity).toString());  // "Infinity"
console.log((true).toString());      // "true"
```

<br>

- 문자열 연결 연산자를 이용하는 방법
```javascript
console.log(1 + '');        // "1"
console.log(NaN + '');      // "NaN"
console.log(Infinity + ''); // "Infinity"
console.log(false + '');    // "false"
```

<br>
<br>

### 명시적 2) 숫자 타입으로 변환
- `Number` 생성자 함수를 new 연산자 없이 호출하는 방법
```javascript
console.log(Number('0'));     // 0
console.log(Number('-1'));    // -1
console.log(Number('10.53')); // 10.53
console.log(Number(true));    // 1
```

<br>

- `parseInt`, `parseFloat` 함수를 사용하는 방법 (문자열만 변환 가능)  
→ 첫 글자가 숫자로 변환할 수 없는 값이면 NaN값을 반환  
> **`parseInt(string, radix)`**   
>  : 입력 받은 string값을 정수로 변환  
> **`parseFloat(string)`**  
> : 입력 받은 string값을 실수로 변환

<br>

```javascript
console.log(parseInt('0'));       // 0
console.log(parseInt('-1'));      // -1
console.log(parseInt("k10"));     // NaN
console.log(parseInt(""));        // NaN

console.log(parseFloat('10.53')); // 10.53
```
<br>

- `+` 단항 연결 연산자를 이용하는 방법
- `*` 산술 연산자를 이용하는 방법

<br>
<br>

### 명시적 3) 불리언 타입으로 변환
- Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
```javascript
console.log(Boolean(''));        // false
console.log(Boolean('false'));   // true
// 따옴표 안에 들어 있는 false는 논리값이 아니라 문자이기 때문에 true값을 반환하는 것이다

console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(NaN));       // false
console.log(Boolean(Infinity));  // true

console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

console.log(Boolean({}));        // true
console.log(Boolean([]));        // true
```

<br>

- ! 부정 논리 연산자를 **두번** 사용하는 방법
```javascript
console.log(!!'');        // false
console.log(!!'false');   // true >> 'false'은 불리언형이 아닌 문자열 글자임을 유의하자!
console.log(!!false);    // false
```
<br>
<br>
<br>

## 단축 평가 (short-circuit evaluation)
- 표현식을 평가하는 도중에 평가 결과가 확정된 경우, 나머지 평가 과정을 생략 하는 것
- 논리 연산의 **결과를 결정하는 값을 그대로 반환**함

<br>

> `&&`  
> 2개의 피연산자가 모두 true로 평가될 때 true를 반환  
>
>  `||`  
> 2개의 피연산자 중 1개만 true로 평가되도 true를 반환  

<br>

```javascript
'Cat' && 'Dog'
// 'Dog' 반환 >>> 두번째 피연산자 Dog를 통해 논리 연산 결과가 결정되었기 때문에 Dog를 반환하는 것이다.

false && 'Dog'
// false 반환 >>> &&연산자는 둘 중 하나라도 거짓이면 거짓이기 때문에 첫번째 피연산자가 false로 판명났기 때문에 평가의 결과값인 false를 반환

'Cat' || 'Dog'
// 'Cat' 반환 >>> OR연산자는 이미 첫번째 피연산자가 true로 결정되었기 때문에 두번째 피연산자를 더이상 평가할 필요가 없다. (논리 연산의 결과를 cat이 결정하였기 때문에 cat이 반환되는 것이다!)

undefined || 0   // 0 반환
```

<br>

***[예제1] 변수 a에 값이 null 또는 undefined가 들어 있는 상태에서 객체의 key값 형태로 접근을 하면 에러가 발생되는 것을 볼 수 있다.***

```javascript
var a = undefined;
var vlaue = a.value;
// TypeError: Cannot read properties of undefined (reading 'value')
```
```javascript
var b = null;
var vlaue = b.value;
// TypeError: Cannot read properties of null (reading 'value')
```

<br>
<br>

### 옵셔널 체이닝(optional chaining) `?.`
- ES11에 도입된 연산자
- `?.` 을 사용하면 프로퍼티가 없는 **중첩 객체를 에러 없이 안전하게 접근** 할 수 있다.
- 옵셔널 체이닝은 반드시 해당 변수가 선언되어 있는 상태여야 한다!
- 해당 값이 객체 데이터인 상태에서 확인이 가능하다!

<br>

***[예제2] 위의 예제 1에서 null 또는 undefined가 할당된 값에 객체의 key값을 접근하면 에러가 출력되는데, 이때 옵셔널 체이닝을 활용하면 undefined가 반환되는 것을 볼 수 있다.***

```javascript
var a = null;
var value = a.value;

console.log(value);
// Uncaught TypeError: Cannot read properties of null (reading 'value')

// 옵셔널 체이닝 활용
var b = null;
var value = b?.value;
// undefined
```
→ 옵셔널 체이닝을 활용하면 null 또는 undefined값이 할당되어도 undefined가 반환 된다!

<br>

```javascript
user?.address;
// ReferenceError: user is not defined
// user변수가 선언되지 않았기 때문에 error발생
```

<br>

***[예시] 빈 객체안에서 중첩된 객체의 key값을 불러온다고 가정***
```javascript
let user = {};

console.log(user.address)   // undefined 
console.log(user.address.street);
//TypeError: Cannot read property 'street' of undefined
```
→ street 이라는 key는 user.address라는 객체안에 중첩되어 들어가 있는 key이다. 하지만 해당 정보가 없어 값에 접근할 수 없기 때문에 error가 발생

그래서 이러한 문제를 해결하기 위해 과거에는 `&&` 연산자를 사용했었다.
하지만 ES11부터 옵셔널 체이닝의 등장으로 `?.`을 이용해 평가하게 된 것이다.

<br>
<br>
<br>

### null 병합 연산자 `??`
- ES11에 도입된 연산자
-  여러 피연산자 중 값이 확정되어 있는 변수를 쉽게 찾을 수 있도록 도와주는 연산자
- `??`로 비교하는 2개의 피연산자 중 하나가 **null 또는 undefined 가 있다면  
  null, undefined가 아닌 다른 피연산자를 반환**한다!  
→ 즉, 변수 a와 b를 비교 시, 변수 a값에 null 또는 undefined값이 할당되어 있다면 b를 반환하고, null 또는 undefined값이 없다면 첫번째 피연산자인 a를 반환한다!
- **괄호 없이 ??를 ||나 &&와 함께 사용하는 것은 금지**되어 있다.

<br>

>  `||` (OR연산자)와 `??` (null병합연산자)는 비슷하지만, 차이가 있다.  
> - `||`는 첫 번째 피연산자가 true면 첫번째 피연산자 값을 반환함  
> - `??`는 첫 번째 정의된(defined) 값을 반환함

<br>

***[예제1-1] OR 연산자를 이용해 평가된 결과값을 반환하기***

```javascript
let abc = 0;

console.log(abc || "123");  // "123"
```
→ "123"이 출력되는데, 변수 abc의 값이 0이므로 false값이 된다. 그리고 OR 연산자는 둘 중 하나만 true라면, 바로 그 평가된 값을 반환하기 때문에 위의 예제에서 true값인 "123"을 반환하는 것이다!

<br>

***[예제1-2] null 병합 연산자를 이용해 평가된 결과값을 반환하고 "예제1-1"과 차이점을 확인해보자***

```javascript
let abc = 0;

console.log(abc ?? "123");    // 0
```
→ 0 이 출력된다. 왜냐하면 null 병함 연산자(`??`)는 변수값에 null또는 undefined가 있을 때 값이 확정되어 있는 변수의 할당된 값을 반환한다.  
그래서 [예제1-2]의 변수 abc에 0 이라는 값이 할당되어져 있다고 보기 때문에 0 값을 반환하는 것이다!  
참고로 아래 예제에서 null 병합 연산자는 '' (빈문자열)도 마찬가기로 할당된(정의된) 값이 있다고 보는 것이다!

<br>

```javascript
var foo =  'string value' ?? undefined;

console.log(foo);
// string value
```
<br>

```javascript
var foo =  'string value' ?? '';
console.log(foo)
// string value

var foo =  '' ?? 'string value';
console.log(foo);
// '' >>> 빈 문자열은 null , undefined와 달리 좌항에 적힌 값 그대로 반환 한다

let a = null;
let b = undefined;
let c = "hello";
let d = "world";

console.log(a ?? b ?? c ?? d);
// "hello"  >>> null이나 undefined가 아닌 첫 번째 피연산자를 반환!
```