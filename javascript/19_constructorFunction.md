# [TIL] JS_생성자함수

객체를 만들 때 주로 리터럴 방식을 사용하나,      
new연산자를 활용해서 생성자 함수로도 객체를 생성할 수 있다.

<br />

## 생성자 함수
- new 연산자와 함께 호출하여 **객체를 생성하는 함수**    
  (인스턴스 : 생성자 함수에 의해 생성된 객체)
- 어떤 반복적인 대량의 결과물을 뽑아내기 위한 시스템적인 틀을 의미
- 특정 기능의 복사본(인스턴스, 객체)을 생성하기 위한 특별한 함수

- 반드시 함수 이름을 정의할 때 **대문자로 작성**하는 것이 원칙이다.

<br />

```javascript
/* 객체 리터럴 방식 */
const person = {};

person.name = 'Kim';
person.sayHello = function(){
  console.log(`Hello~ I'm ${this.name}`)
}
console.log(person);
// {name: 'Kim', sayHello: ƒ}
```
```javascript
/* 생성자 함수 방식 */
const person = new Object();

person.name = 'Kim';
person.sayHello = function(){
  console.log(`Hello~ I'm ${this.name}`)
}
console.log(person);
// {name: 'Kim', sayHello: ƒ}
```

<br />
<br />

### 생성자 함수 장점
- 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성할 수 있다.
  → 재사용할 수 있는 객체 생성코드를 구현함!!

```javascript
// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}


// 인스턴스의 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1);   // Circle {radius: 5, getDiameter: ƒ}
console.log(circle2);   // Circle {radius: 10, getDiameter: ƒ}

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20
```
객체 리터럴 방식은 직관적이지만, 동일한 프로퍼티를 갖는 여러개의 객체를 생성해야 할 때, 매번 같은 프로퍼티를 작성해야 해서 매우 비효율적임!

하지만 생성자 함수를 사용하면 동일한 프로퍼티 구조를 갖는 객체를 여러개 생성할 때, 좀 더 간편하게 생성할 수 있다.

<br />
<br />

## 생성자 함수 인스턴스 생성과정

![Untitled-1](https://user-images.githubusercontent.com/81572770/152586936-4f7cc2ef-e1eb-436d-8dd9-d5368ea57bd6.png)

인스턴스 반환 시, 암묵적으로 바인딩된 this가 반환되는데,  
만약 명시적으로 어떠한 것을 return하고 있다면 암묵적인 `return this;`가 무시된다!      

`return this`가 반환되지 못해 원하는 결과를 가져오지 못하지만,   
원시값 (number, string...)을 반환한다면 원시값 반환이 무시되고 `return this;`가 반환된다!

→ ❗ 생성자 함수 내부에서 return문을 작성하지 말아야 한다!

<br />
<br />

***[예제1] 생성자 함수 내부에서 return문을 사용한 경우***

```javascript
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  return {abc: 100};
}

const circle1 = new Circle(5);
console.log(circle1);
// {abc: 100}
```
→ 생성자 함수 내부에서 `return {abc: 100};`을 반환하고 있는 바람에,   
  `return this;`가 반환되지 못하고 무시되어 결과값이 `{abc: 100}` 으로 출력된 것을 볼 수 있다.

<br />

***[예제2] 생성자 함수 내부에서 원시값을 반환하는 경우***

```javascript
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  return 'abc';
}

const circle1 = new Circle(5);
console.log(circle1);
// Circle {radius: 5, getDiameter: ƒ}
```
→ 생성자 함수 내부에서 `return 'abc';` 이렇게 반환하는 값이 **원시값**이라면   
  원시값 반환이 무시되고 그대로 `return this;`가 반환되어 결과값이 정상적으로 출력된다!

<br />
<br />
<br /> 

## constructor와 non-constructor 
- constructor : 내부메서드 `[[Construct]]`를 갖는 함수 객체
- non-constructor : 내부메서드 `[[Construct]]`를 갖지 않는 함수 객체

<br />

구분 | 함수 정의 방식에 따라 분류
|:---:|:---:|
constructor | 함수 선언문, 함수 표현식, 클래스(클래스도 함수다)
non-constructor | 메서드(ES6 메서드 축약 표현), 화살표 함수

→ 함수 선언문, 함수 표현식, 클래스 함수는 생성자 함수로 정의하지 않더라도,    
  new 연산자로 호출하면 `[[Construct]]` 가 호출되기 때문에 생성자 함수로써 동작한다!

하지만, 메서드(ES6 메서드 축약 표현), 화살표 함수는 new 연산자로 호출해도 생성자 함수가 될 수 없다! (에러 발생)

<br />
<br />

## new.target
- 생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해 사용   
  (자주 사용되는 문법은 아니라고 함!)    
  → 즉, new.target 프로퍼티를 사용하면 함수가 new와 함께 호출되었는지 아닌지를 알 수 있다.

- new를 사용하지 않고 함수를 호출(일반 함수 호출)했다면 `new.target`은 `undefined`를 반환

<br />

```javascript
function User() {
  alert(new.target);
}

// 'new' 없이 호출함
User(); // undefined

// 'new'를 붙여 호출함
new User(); // function User { ... }
```

<br />

***[예제] `new.target`을 활용한 생성자 함수 호출 방법***    
일반 함수형태로 호출해도 new 연산자를 사용해 호출한 것처럼 동작시킬 수 있다.

```javascript
function User(name) {
  if (!new.target) { // new 없이 호출해도
    return new User(name); // new를 붙여줍니다.
  }

  this.name = name;
}

let person = User('kim'); // 'new User'를 쓴 것처럼 바꿔 줌
alert(person.name); 
```

<br />
<br />
<br />

<hr />

<br />

***[문제1] `new A()==new B()`가 성립 가능한 함수 A와 B를 만드는 게 가능한지 고민해보기***

```javascript
function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
```

<br />

✅ 내가 작성한 답

```javascript

```

<br />
<br />

***[문제2] 아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들기***

> read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장   
> sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환    
> mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환   

```javascript
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

<br />

✅ 내가 작성한 답

```javascript

```

<br />
<br />

***[문제3] 생성자 함수 Accumulator(startingValue)를 만들기***

Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건을 충족해야 한다.   

> 프로퍼티 value에 현재 값(current value)을 저장한다.    
> 최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아 온다.   
> 메서드 read()에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더해준다.   
> 프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장된다.     

데모를 위한 코드는 다음과 같다.

```javascript
let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); 
// 최초값과 사용자가 입력한 모든 값을 더해 출력함
```

<br />

✅ 내가 작성한 답

```javascript

```

<br />
<br />

문제 출처)    
[Javascript.INFO : new 연산자와 생성자 함수](https://ko.javascript.info/constructor-new)   

<br />
<br />


