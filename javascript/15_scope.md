# [TIL] JS_Scope

*< 관련 내용 참고하기 >*    
[변수 개념](https://github.com/cookie0215/TIL/blob/main/javascript/1_variable.md)   
[변수의 Lifecycle](https://github.com/cookie0215/TIL/blob/main/javascript/16_lifecycle_var_let_const.md)   
[var,let, const 비교](https://github.com/cookie0215/TIL/blob/main/javascript/17_변수키워드.md)   


<br />

## 스코프(Scope, 유효범위)
- 모든 식별자(변수, 함수 등)는 **자신이 선언된 위치에 의해** 다른 코드가 식별자 자신을 참조할 수 있는 유효범위가 결정된다.
- 스코프를 사용해 식별자의 고유한 이름이 충돌되지 않고 같은 이름의 식별자를 사용할 수 있게 한다.    
  → 스코프가 없다면 모든 식별자의 이름을 일치하지 않게 다 따로따로 만들어야 하기 때문에 번거롭다!

```javascript
var x = '안녕';

function foo () {
  var x = 'hello';
  var y = 'welcome'
  console.log(x);
}

foo(); //  ① ?
console.log(x); //  ② ?
console.log(y); //  ③ ?  
```

정답 ⭕    
  ① `foo()`는  'hello' 출력,    
  ② `console.log(x);` 는 '안녕' 출력   
  ③ `console.log(y);` 는 'Reference Error : y is not defined' 발생

<br />

✅이유   
① foo함수를 호출하면 함수 안에 `console.log(x)`가 실행되어야 한다.   
이때 hello값을 가진 선언된 변수 x가 foo()함수 스코프 안에 위치해 있기 때문에    
가장 상단에 있는 전역변수 x(안녕)가 아닌 **함수스코프에 있는 x가 참조되어 'hello' 가 출력되는 것**이다!

② `console.log(x);`는 어떠한 스코프(유효범위)안에 위치해 있지 않고   
전역으로 위치해 있기 때문에 가장 상단에 있는 전역 변수를 참조하게 된다.    
그래서 '안녕' 이 출력된다.

③ `console.log(y);`는 에러가 발생하는데, 변수y가 foo()함수 스코프 안에 위치해있기 때문에 함수 내부에서만 참조 가능하다.    
그런데 `console.log(y);`는 함수 밖에서 참조하려고 하니 변수 y를 찾을 수 없어서 에러가 발생하는 것이다!

<br />
<br />

## Scope 종류
**변수는 선언된 위치에 따라** 전역 또는 지역 스코프를 가진다.

### Global scope (전역 스코프)
- 전역변수는 어디서든 참조 가능

<br />

### Local scope (지역 스코프)
- 지역변수는 자신이 선언된(위치한) 지역과 하위 지역스코프에서만 참조 가능

<br />
<br />

## Scope Chain (스코프 체인)
- 함수 중첩에 의해 스코프가 계층적으로 연결된 것   
  → 전역스코프 - 외부함수스코프 - 내부함수 스코프가 계층구조로 연결되어 있다.

- 스코프 체인을 통해 변수를 참조할 때 **참조하려는 코드의 위치(스코프)에서 시작해**   
  **상위 스코프로 이동해가면서 참조하려는 해당 변수가 있는지 검색**한다.

- **상위 스코프에서 선언한 변수를 하위스코프에서도 참조가능**    
  → 상위 스코프에서 유효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만,     
  하위 스코프에서 유효한 변수를 상위 스코프에서 참조할수는 없다.

![Untitled-1](https://user-images.githubusercontent.com/81572770/149378123-8d54e64c-24b2-4b33-9aac-be3df6b47ddb.png)

중첩함수 inner에서 `console.log(y)`를 참조하기 위해 inner안에서 변수 y를 찾는다.   
→  참조하려는 변수 y가 없으니, 바로 상위 스코프인 외부함수 outer로 이동.    
→ 마찬가지로 외부함수 outer에도 변수 y를 찾을 수 없어서 그 다음 상위인 전역 스코프로 이동.    
전역 스코프에 변수 y가 선언되어 있기 때문에 해당 y의 값인 'global y'를 그대로 가져와 출력하고 검색을 종료함

<br />

***[예제] 실행결과 예측하기***

```javascript
function foo() {
  console.log('global function foo');
}

function bar() {
  // 중첩 함수
  function foo() {
    console.log('local function foo');
  }

  foo(); 
}

bar();    // ① ?
foo();    // ② ?
```
정답 ⭕    
  ① `bar()` → local function foo 출력   
  ② `foo()`  → global function foo 출력 

<br />

✅이유  
  ① `bar()`는 호출 시, 중첩함수인 `foo()`가 실행된 결과값을 출력해야 한다.   
    중첩함수 `foo()`는 `local function foo` 를 실행하기 때문에   
    결국 외부함수 `bar()`호출 시, `local function foo` 함수가 출력된다!   

  ② 그리고 맨 마지막에 호출된 `foo()`는 전역 스코프에 위치하고 있기 때문에   
  bar()안의 중첩함수 foo()가 아닌 가장 상단에 위치한 전역 함수 `foo()`를 참조하게 되어 `global function foo`가 출력되는 것이다!!


<br />
<br />

## 함수레벨 스코프
   블록레벨 스코프    |   함수레벨스코프
|:-------------------:|:-------------------:|
`{ }`        |   `function(){ }`
ex) `for(){ }` , `if(){ }` |  - 

- 자바스크립트에서 일반 블록레벨스코프와 함수레벨스코프는 다르다.    
- var는 함수레벨스코프만 지역스코프로 인정하기 때문에   
  블록레벨스코프(ex. if문, for문)에 사용되면 그냥 전역변수로 인식된다.
- let , const는 블록레벨, 함수레벨 스코프 모두 지역 스코프로 인식!

<br />

```javascript
/* 블록레벨스코프에 사용된 var */
var i = 10;
for(var i =0; i < 5; i++) {
    console.log(i)   //0,1,2,3,4
}

console.log(i)    //5
```
```javascript
/* 블록레벨스코프에 사용된 let */
let k = 10;
for(let k =0; k < 5; k++) {
    console.log(k) //0,1,2,3,4
}

console.log(k) //10
```
→ let은 블록레벨 스코프도 지역변수로 인식하기 때문에    
  가장 마지막에 참조된 `console.log(k)`는 전역스코프에 위치하고 있어    
  변수 검색 시, 가장 상단에 위치한 전역 변수 k를 찾아서 값을 출력한다.

<br />
<br />

***[연습1] foo()와 console.log(x)에 출력되는 값은?***

```javascript
var x = 10;

function foo() {
  x = 100;
  console.log(x);
}

foo();   //  ① ?
console.log(x);   //  ② ?
```
정답 ⭕    
  ① `foo()` → 100 출력    
  ② `console.log(x);`  → 100 출력 

<br />

✅이유  
  일단 변수는 자신이 선언된 위치(전역 또는 지역)에 의해   
  다른 식별자가 자신을 참조할 수 있는 유효범위(스코프)가 결정된다.   
  
  전역에 선언된 변수 x는 어디서든지 참조할 수 있게 된다.   

  ① `foo()`함수 안에서 전역변수 x를 참조할 수 있기 때문에 x값이 함수내(지역스코프)에서 100이라는 값으로 재할당 되었다.   
  그렇기 때문에 foo()를 호출했을 때 안의 console문을 100이 출력된다.    

  ② 마지막 `console.log(x);`는 '전역 변수 x의 값을 출력해야 하니, 10이 아닐까?🤔' 라고 생각했다.   

  → 하지만 이미 **지역 스코프에서 전역변수를 참조해서 100이라는 값으로 재할당 시켰기 때문에**   
  결과적으로 전역변수 x의 값이 100으로 변경된 것이다!!

  그래서 100 이 출력되었다!!

<br />
<br />

***[연습2] foo()와 console.log(x)에 출력되는 값은?***

```javascript
var x = 10;

function foo(){
  var x = 100;
  console.log(x);  // ① ?

  function bar(){
    x = 1000;
    console.log(x); // ② ?
  }

  bar();
}
foo();
console.log(x); // ③ ?
```
정답 ⭕    
  ① 100 출력   
  ② 1000 출력    
  ③ 10 출력

<br />

✅이유   

  ① 외부함수 `foo()`안의 `console.log(x);`는 100이라는 값을 참조하고 있기 때문에 100이 출력된다.
  
  ② 중첩함수 `bar()`에서 x값이 선언되지 않고 1000이라는 값이 할당만 되어 있다.   
    스코프 체인에 의해 상위 스코프에서 선언한 변수를 하위 스코프에서도 참조할 수 있기 때문에   
    bar()에 작성된 x는 원래 foo()에서 선언된 x값 100을 1000으로 재할당 시킨 것으로 볼 수 있다.
  
  ③ 맨 마지막 `console.log(x);`는 전역 스코프에 위치해 있기 때문에 해당 변수를 참조하기 위해    
    전역 변수에 위치한 변수 x를 찾을 것이다.  
    그래서 가장 상단에 위치한 `var x = 10;`를 찾아 10이라는 값을 출력한다!

<br />
<br />

## 렉시컬 스코프
- 함수를 어디서 정의했는지에 따라 함수의 상위 스코프를 결정
- **정적스코프**라고도 함
- **자바스크립트는 렉시컬 스코프 방식에 따라 값이 결정**된다.

<br />

***[연습1-1] 실행 결과 예측하기***

```javascript
var x  = 1;

function foo() {
    var x = 10;
    bar();
}

function bar(){
    console.log(x)
}
foo();   // ① ?
bar();   // ② ?
```
정답 ⭕    
  ① `foo()` → 1 출력    
  ② `bar()` → 1 출력 

<br />

✅이유   
  지금 bar()함수의 x가 참조하고 있는 값을 찾아야 한다.   
  bar()함수의 상위 스코프가 `x = 1;`인지 `x = 10;`인지에 따라 결정되는데,   
  이때 2가지의 경우에 수가 있다.   

  1) 동적 스코프 : bar함수를 **어디서 호출했는지에 따라** 함수 상위 스코프가 결정   
  2) 렉시컬 스코프 (정적스코프) : bar함수를 **어디서 정의했는지에 따라** 함수 상위 스코프가 결정된다.   

  어떤 프로그래밍 언어를 사용했는지에 따라 결과값이 달라지는데,   
  **자바스크립트의 경우 렉시컬 스코프 방식을 따른다!!**

<br />

  → bar()함수는 현재 외부함수로써 위치하고 있기 때문에   
  bar()함수의 상위 스코프는 bar함수가 정의되어 있는 위치에 따라    
  전역스코프에 위치한 `var x = 1;` 이 된다.   

  그래서 `bar()`함수 호출 시, 1 이 출력되고,   

  `foo()`함수 역시 호출할 때, bar()호출을 실행시키기 때문에 결과값이 1이 출력된다!!  

<br />
<br />

***[연습1-2] 연습1-1을 바탕으로 bar함수가 정의되기 전, 함수가 호출될 때 실행 결과 예측하기***

```javascript
var x = 1;

function foo() {
  var x = 10;
  bar();
}

foo();   // ① ?

function bar() {
  console.log(x);
}

bar();   // ② ?

```
정답 ⭕    
  ① `foo()` → 1 출력     
  ② `bar()` → 1 출력   

<br />

✅이유   
  `foo()`와 `bar()` 함수 모두 함수 선언문이기 때문에 함수가 정의되기도 전에    
  함수 호출이 먼저 되어도 **함수 호이스팅에 의해**   
  함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작한다!

<br />
<br />

***[연습1-3] bar함수가 함수 표현식일 때 실행 결과 예측하기***

```javascript
var x = 1;

function foo() {
  var x = 10;
  bar();
}

foo(); // ?

var bar = function() {
  console.log(x);
}

bar();
```
정답 ⭕    
  `Uncaught TypeError: bar is not a function at foo` 에러 발생

<br />

✅이유   
  `foo()`함수 호출 시, bar()함수가 호출(실행)된 값을 출력해야 하는데 
  현재 bar는 함수 표현식으로 사용되었다.    
  함수 표현식은 함수 호이스팅이 발생하지 않기 때문에 에러가 출력되는 것이다!!   
  

<br />
<br />

***[연습] 실행 결과 예측하기***

```javascript
var x = 1;

function foo() {
  var x = 10;
  function bar() {
    console.log(x);
  }
  bar();
}

foo();   // ① ?
bar();   // ② ?

```
정답 ⭕    
  ① `foo()` → 10 출력    
  ② `bar()` → `Uncaught ReferenceError: bar is not defined` 에러 발생

<br />

✅이유   

  ① `foo()`는 중첩함수인 bar()를 호출한 결과값을 출력해야 한다.   
    이때 중첩함수 bar()는 x값을 참조해야 하는데 함수가 정의된 위치에 따라   
    foo()함수가 bar()의 상위 스코프가 된다.    
    그래서 foo()에 선언된 x의 값 10을 참조하고 호출되며   
    결국 foo()호출 시, 10이 출력되는 것이다.   

  ② 그리고 맨 마지막에 호출하고 있는 bar()는 전역 스코프에 위치해 있기 때문에   
    전역에 위치한 bar()함수를 찾으려고 할 것이다.   
    하지만 현재 예제에서는 bar()함수가 중첩함수말고는 정의된게 없기 때문에   
    `ReferenceError`가 발생하는 것이다!!

<br />
<br />
