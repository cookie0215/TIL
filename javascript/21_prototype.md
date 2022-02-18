# [TIL] JS_프로토타입

자바스크립트는 **프로토타입 기반의 객체지향** 프로그래밍언어이다.    
→ 클래스를 사용하지 않아도 객체를 생성할 수 있다. (ES6에서 class가 추가되었다.)

<br />

## 객체 지향 프로그래밍

### 객체
- **속성**을 통해 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조
- **상태** 데이터와 **동작**을 하나의 논리적인 단위로 묶은 복합적인 자료구조   
  (여기서 객체의 상태 데이터를 **프로퍼티** , 동작을 **메서드**라고 한다!)

<br />

![객체자료1](https://user-images.githubusercontent.com/81572770/154728250-f1e0f358-a764-450a-b84c-bd0b59645c44.png)

<br />

![Untitled-1](https://user-images.githubusercontent.com/81572770/154728720-5e8623e0-37ca-45e1-92c9-eb83b9c01c6b.png)

<br />
<br />

## 상속
- 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것
- 코드 재사용에 유용 (불필요한 중복을 제거할 수 있다!)

<br />

![Untitled-1](https://user-images.githubusercontent.com/81572770/154735557-37753218-80e5-4988-94df-f0851fdac4bf.png)

<br />
<br />
<br />

## 프로토타입(객체)

- 상속을 구현하기 위해 사용
- 어떤 객체의 상위(부모) 객체 역할 을 하는 객체임    
  → 해당 프로퍼티 또는 메서드를 다른 객체에서 사용할 수 있도록 공유한다.

- **객체 생성 방식에 따라** 프로토타입이 결정됨 (그리고 `[[Prototype]]` 내부슬롯에 저장됨)    

  ex) **객체 리터럴에 의해 생성된 객체**의 프로토타입은 **Object.prototype** 이다.  
    **생성자 함수에 의해 생성된 객체 (인스턴스)**의 프로토타입은 **생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체**이다.

<br />
<br />

### `__proto__` 접근자 프로퍼티

- `__proto__`접근자 프로퍼티는 **Object.prototype의 프로퍼티**이다.    
  (객체가 직접 소유하고 있지 않다!!)
- `[[Prototype]]` 내부슬롯인 프로토타입에 간접적으로 접근 가능    
  → 프로토타입 체인이 생성되는 것을 방지하기 위해 `__proto__`을 사용해서 간접 접근하는 것이다!!

- `__proto__` 은 getter, setter 접근자 함수를 통해 프로토타입을 읽거나 새로 할당할 수 있다!
- ECMA Script에서 `__proto__`을 직접 사용하는 것을 권장하지 않는다.    
  → 프로토타입의 참조를 얻고 싶을 땐  `Object.getPrototypeOf()`을 사용해서 접근하고,    
    프로토타입을 교체하고 싶을 땐  `Object.setPrototypeOf()`을 사용해서 접근하는 것을 권장함.

<br />
<br />

***[예제1-1] console창에 객체 리터럴에 의해 생성된 person객체의 프로토타입 출력하기***

```javascript
/* 딥다이브 예제 19-05 */
const person = {name: 'lee'}
```

![Untitled-2](https://user-images.githubusercontent.com/81572770/154742680-dede2edd-9b6e-473b-9c7b-a51be9502331.png)

→ 객체 리터럴로 생성된 객체 person의 프로토 타입이 Object.prototype 이며,    
  `__proto__` 이 접근자 프로퍼티를 통해 `[[Prototype]]` 내부슬롯인 프로토타입에 간접적으로 접근할 수 있다!

<br />
<br />

***[예제1-2] 객체 리터럴에 의해 생성된 person객체가 `__proto__` 을 갖고 있는지 확인하기***

```javascript
/* 딥다이브 예제 19-07 */
const person = {name: 'lee'};

console.log(person.hasOwnProperty('__proto__'));
// false
```
→ false 값이 출력되는 것으로 보아,     
  `__proto__` 접근자 프로퍼티는 person객체가 직접 갖고 있는 프로퍼티가 아님을 알 수 있다!

<br />
<br />

***[예제2]  `Object.getPrototypeOf()`과 `Object.setPrototypeOf()`을 이용해 프로토타입 취득 및 할당하기***

```javascript
/* 딥다이브 예제 19-10 */
const obj = {};
const parent = {x: 1};

console.log(obj.x);    // undefined

Object.getPrototypeOf(obj);
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}


Object.setPrototypeOf(obj, parent);
/*
  {}
    [[Prototype]]: Object
      x: 1
        [[Prototype]]: Object
*/

console.log(obj.x);    // 1
```

→ `Object.getPrototypeOf(obj);`는 `obj.__proto__;`과 동일하며, getter함수가 호출되어 odj객체의 프로토타입을 취득했다.   
  `Object.setPrototypeOf(obj, parent);`는 `obj.__proto__ = parent;`과 동일하며    
  setter함수가 호출되어 odj객체의 프로토타입을 parent로 교체한 것을 볼 수 있다.

  그래서 obj 객체는 parent의 x 프로퍼티 값을 출력할 수 있다.

<br />

```javascript
/* 바로 위의 예제 참고 */

Object.setPrototypeOf(parent,obj);
// Uncaught TypeError: Cyclic __proto__ value (에러 발생)
```
→ obj 객체에 이미 parent 객체의 프로토타입을 설정했기 떄문에, parent객체는 obj를 프로토타입으로 설정할 수 없다.

프로토타입 체인이 단방향 링크드 리스트로 구현되고 있기 때문!!    
(그렇지 않으면 프로토타입 체인에서 프로퍼티 검색 시, 무한 루프에 빠지게 됨)

<br />


### 

<br />
<br />

