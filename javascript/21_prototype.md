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
- 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아서 그대로 사용할 수 있는 것
- 코드 재사용에 유용 (불필요한 중복을 제거할 수 있다!)

<br />

![Untitled-1](https://user-images.githubusercontent.com/81572770/154735557-37753218-80e5-4988-94df-f0851fdac4bf.png)

첫번째 예시의 생성자 함수 Circle은 인스턴스를 생성할 때마다 각각의 인스턴스들 모두 내용이 똑같은 getArea 메서드를 중복 생성, 소유하게 된다. 

→ 메모리를 불필요하게 낭비함

→ 그래서 두번째 예시처럼 프로토타입기반의 상속을 활용해 불필요한 중복을 제거할 수 있다.

<br />
<br />
<br />

## 프로토타입(객체)

- 상속을 구현하기 위해 사용
- 어떤 객체의 상위(부모) 객체 역할 을 하는 객체임    
  → 프로토타입(부모객체)은 하위(자식)객체에게 자신의 프로퍼티와 메서드를 사용할 수 있도록 만든다. (상속할 수 있도록 만듬!)

- **객체 생성 방식에 따라** 프로토타입이 결정됨 (그리고 `[[Prototype]]` 내부슬롯에 저장됨)    

  ex) **객체 리터럴에 의해 생성된 객체**의 프로토타입은 **Object.prototype** 이다.  
    **생성자 함수에 의해 생성된 객체 (인스턴스)**의 프로토타입은 **생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체**이다.

- 프로토타입은 **생성자 함수가 생성되는 시점에 더불어 생성됨**   
  → prototype과 생성자 함수는 항상 쌍으로 존재하기 때문!

<br />
<br />

### `__proto__` 접근자 프로퍼티

- 자체적으로 값을 갖지 않고 **다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수(getter, setter함수)로 구성된 프로퍼티**이다.
- `__proto__`접근자 프로퍼티는 **Object.prototype의 프로퍼티**이다.    
  (해당 객체가 직접 소유하고 있지 않다!!)
  
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
<br />

### prototype 프로퍼티

- (내부 메서드 `[[Construct]]`를 갖는) 함수 객체 만이 소유하고 있는 프로퍼티이다.    
  → 즉, constructor 만이 소유한 프로퍼티
- non-constructor는 `prototype 프로퍼티`를 갖고 있지 않고 프로토타입을 생성하지도 않는다!    
  (non-constructor : 화살표함수, ES6 메서드 축약표현)

- `prototype 프로퍼티`는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.

<br />
<br />

***[예제2] 일반함수와 화살표함수가 `prototype 프로퍼티`를 갖고 있는지 확인해보기***

```javascript
/* 딥다이브 예제 19-12 ~ 19-13 */

// constructor인 일반 함수 (함수객체 = 생성자함수)
function Person1(name) {
    this.name = name;
}

console.log(Person1.hasOwnProperty('prototype'))    // true
console.log(Person1.prototype)    // {constructor: ƒ}

const me1 = new Person1('Lee');
console.log(me1);      // Person1 {name: 'Lee'}

console.log(Person1.prototype === me1.__proto__)    // true



// non-constructor인 화살표 함수
const Person2 = (name) => {
    this.name = name;
}

console.log(Person2.hasOwnProperty('prototype'))    // false
console.log(Person2.prototype)   // undefined

const me2 = new Person2('Lee');
console.log(me2);   // TypeError: Person2 is not a constructor
```
non-constructor인 화살표 함수는 `prototype 프로퍼티`을 갖고 있지도 않고, prototype도 생성하지 않는다.   
(참고로, 호이스팅도 발생하지 않는다!!)

또한 new 연산자와 함께 생성자함수로 호출할 수 없다. (에러 발생)

`console.log(Person1.prototype === me1.__proto__)`를 통해 `__proto__`접근자 프로퍼티와 `prototype 프로퍼티`는    
동일한 프로토타입을 가리키는 것을 볼 수 있다...😂(좀 더 공부해서 찾아볼 것...!)
<br />
<br />

위의 `[예제2]` 에서 볼 수 있듯이,
```javascript
function Person1(name) {
    this.name = name;
}

const me1 = new Person1('Lee');
console.log(Person1.prototype);    // {constructor: ƒ}
console.log(me1.__proto__);        // {constructor: ƒ}
console.log(Person1.prototype === me1.__proto__);   // true

console.log(me1.constructor === Person1)    // true
```

현재 `me1`객체에는 constructor 프로퍼티가 없다.   
하지만 `me1.constructor` 이렇게 사용할 수 있는 이유는   
`me1` 라는 인스턴스(객체)의 생성자 함수 `Person1`에 있는 `constructor`프로퍼티를 상속받아 접근할 수 있는 것이다.

**✅ 즉, 인스턴스(생성자 함수에 의해 생성된 객체)는 프로토타입의 `constructor`프로퍼티에 의해 생성자 함수와 연결되는 것이다.**

<br />

또한 리터럴 표기법에 의해 생성된 객체는 생성자 함수에 의해 생성된 객체(인스턴스)는 아니지만,    
리터럴 표기법에 의해 생성된 객체도 상속을 위해 프로토타입이 필요하며, 이는 곧 constructor 프로퍼티와 연결된다고 볼 수 있다.

**→ 모든 객체는 생성자함수와 연결되어 있다.**

<br />
<br />
<br />

## prototype과 constructor 관계

![Untitled-2](https://user-images.githubusercontent.com/81572770/155700586-6407aadc-0f12-44e2-8301-cd3d610c7f11.png)

→ prototype과 constructor는 한쌍을 이루고 있어서 서로의 정보를 갖고 있다.


<br />
<br />

## 프로토체인
- 객체의 프로퍼티(+메소드)에 접근할 때 해당 객체에 접근하려는 프로퍼티가 없다면 [[Prototype]] 내부슬롯을 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색함   
  **→ 즉, 인스턴스 객체의 key에 접근할 때, 해당 객체에게 key가 없다면 상위 프로토파입 속성에서 key가 있는지 확인하는 것!**

<br />
<br />

## 오버라이딩 & 프로퍼티 섀도잉
> **오버라이딩**     
>  
> 상위 클래스가 갖고 있는 메서드를 하위 클래스가 재정의하여 사용하는 방식

<br />

> **프로퍼티 섀도잉**     
>  
> 상속관계에 의해 가려지는 현상

<br />

***[예제3-1]***

```javascript
/* 딥다이브 예제 19-36 */

const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 프로퍼티 (메서드)
  Person.prototype.sayHello = function () {
    console.log(`Hi Prototype! My name is ${this.name}`);
  };

  return Person;
}());

const me = new Person('Lee');

// 인스턴스 메서드
me.sayHello = function () {
  console.log(`Hey Instance! My name is ${this.name}`);
};

me.sayHello(); // Hey Instance! My name is Lee
```
`me`라는 인스턴스에 `프로토타입프로퍼티`와 동일한 이름인 `sayHello`추가하면    
`프로토타입프로퍼티`를 덮어쓰기되지 않고 인스턴스 프로퍼티로 추가되어 재정의해서 사용한다. (오버라이딩 방식)    

→ 여기서 기존의 `프로토타입프로퍼티`는 안보이게 가려져서 `프로퍼티 섀도잉`이 된다.

<br />

***[예제3-2] 위의 예제에서 작성한 코드를 토대로 인스턴스 메서드 삭제하기***

```javascript
/* 딥다이브 예제 19-37 */
delete me.sayHello;

me.sayHello();  // Hi Prototype! My name is Lee;
```
→ 인스턴스 메서드를 삭제 후, `me.sayHeollo();`를 호출하면 **프로토타입프로퍼티**(메서드)가 호출되는 것을 볼 수 있다.
(참고로, 프로토타입의 프로퍼티를 직접변경 또는 삭제하려면 직접 프로토타입에 접근해야 한다!)

<br />

## 프로토타입 교체

(아직 정리 못함)

<br />
<br />
<br />

## `instanceof` 연산자
> **obj instanceof 생성자함수**

- 객체가 특정 클래스에 속하는지 아닌지를 확인하는 연산자
- 상속관계도 확인해줌
- 생성자함수의 prototype이 obj객체의 프로토타입 체인 상에 존재하면 true를 반환

<br />
<br />

## 프로퍼티 존재를 확인하는 방법
해당 객체 내에 특정 프로퍼티(=key, 속성)가 존재하는지 여부를 확인할 수 있다.


### `in` 연산자

> key **in** object

<br />

```javascript
const person = {name: 'Kim'}

console.log('name' in person)     // true
console.log('age' in person)     // false
console.log('toString' in person)     // false
```
→ ✅ person 객체안에 name이라는 프로퍼티는 존재하기 때문에 in연산자 사용 시, true를 반환하지만,    
age 프로퍼티는 존재하지 않기 때문에 false를 반환한다. 

또한 상속받은 프로토타입 프로퍼티 (ex. constructor,toString(),toLocaleString()...)도 눈에는 보이지 않지만 `프로토타입 체인`에 의해 true를 확인할 수 있다.

<br />
<br />

### `Reflect.has()` 메서드
- in연산자 대신 사용할 수 있도록 ES6 에서 도입한 메서드
- in연산자처럼 상속받은 프로토타입 프로퍼티를 검색(확인)할 수 있다.
  (person 객체에는 존재하지 않지만, 프로토타입 체인에 의해 찾을 수 있다!)

```javascript
const person = {name: 'Kim'}

console.log(Reflect.has(person, 'name'));    // true
console.log(Reflect.has(person, 'age'));    // false
```

<br />
<br />

### `hasOwnProperty()` 메서드
- in 연산자나 `Reflect.has()`처럼 객체의 특정 프로퍼티를 찾는 메서드이다.
- 하지만 **`hasOwnProperty()`는 객체가 직접 갖고 있는 고유의 프로퍼티 key인 경우에만 true를 반환함!!**    
  → 상속받은 프로토타입 프로퍼티를 검색(확인)할 수 없어서 false를 반환한다.

```javascript
const person = {name: 'Kim'}

console.log(person.hasOwnProperty('name'));    // true
console.log(person.hasOwnProperty('age'));     // false
console.log(person.hasOwnProperty('toString'));     // false
```

<br />
<br />



<br />
<br />
<br />

*출처*   
[생성자함수&프로토타입](https://basemenks.tistory.com/m/180)