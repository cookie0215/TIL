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