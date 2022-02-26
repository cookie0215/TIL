# [TIL] JS_프로퍼티

모든 객체는 `[[prototype]]`형태의 내부 슬롯을 갖고 있는데,     
`[[prototype]]`에 접근 시, 직접적으로 접근은 불가능하기 때문에 `Object.getPrototypeOf()`을 사용해서 접근해야 한다!    
(`__proto__` 방식으로도 접근할 수 있지만, ECMA Script에서 사용을 권장하지 않고 있다.)

<br />

```javascript
const obj = {};

obj.[[prototype]];
// Uncaught SyntaxError: Unexpected token '[' 


obj.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}

Object.getPrototypeOf(obj)
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}
```

<br />
<br />

## 데이터 프로퍼티
*자바스크립트 엔진이 프로퍼티를 생성 할 때,*    
*프로퍼티 상태를 나타내는 '**프로퍼티 어트리뷰트**'를 기본값으로 자동 정의 함*

<br />

- 데이터 프로퍼티는 `[[value]]`값과 플래그라는 3가지 속성으로 구성되어 있다.
- 프로퍼티가 생성될 때 프로퍼티 플래그의 기본값은 **true**로 초기화된다.

<br />

### `[[value]]`
- 프로퍼티 key를 통해 프로퍼티 값에 접근하면 해당 값이 반환됨
- 프로퍼티 값을 변경하면 `[[value]]` 재할당됨

<br />

### `[[writable]]`
- 프로퍼티 **값의 변경 가능 여부**를 나타냄    
  → true이면, `[[value]]`값 수정 가능    
  → false이면, 수정 불가능 (읽기 전용 프로퍼티가 됨)
<br />

### `[[Enumerable]]`
- 프로퍼티 **열거 가능 여부**를 나타냄   
  → true이면, 반복문(for in, Object.keys 등) 사용해서 나열 가능    
  → false이면, 반복문 사용해서 나열 불가능

<br />

### `[[Configurable]]`
- 프로퍼티의 **재정의 가능 여부**를 나타냄    
  → true이면, 프로퍼티 삭제 또는 플래그 수정 가능      
  → false이면, 프로퍼티 삭제와 플래그 수정 둘다 불가능   

<br />
<br />

***[예제] 해당 객체의 프로퍼티 정보를 제공하는 프로퍼티 디스크립터 객체 반환하기***

```javascript
/* 딥다이브 예제 16-04 */

const person = {
  name: 'Lee',
}

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: 'Lee', writable: true, enumerable: true, configurable: true}
```
프로퍼티 어트리뷰트 값들(value와 플래그에 대한 정보들)을 확인할 수 있다.

<br />
<br />

## 접근자 프로퍼티
*자체적으로 값을 갖지 않고 다른 데이터의 프로퍼티 값을 읽거나 저장 할 때 사용하는 프로퍼티.*   
*접근자 '**함수**'로 구성된 프로퍼티이며 get으로 값을 얻고, set으로 값을 설정하는 역할을 함*

<br />

### `[[get]]`
- 인수가 없는 함수로, 값을 읽을 때 getter함수 호출(동작)
- 다른 값으로 할당하려고 해도 값이 변경되지 않는다!

<br />

### `[[set]]`
- 인수가 하나인 함수로, 값을 저장(사용)할 때 setter함수 호출(동작)   
  → 특정한 속성에 값이 변경될 때마다 함수를 실행하는데 사용됨

<br />

### `[[Enumerable]]`
- 프로퍼티 **열거 가능 여부**를 나타냄 (데이터 프로퍼티와 동일)

<br />

### `[[Configurable]]`
- 프로퍼티의 **재정의 가능 여부**를 나타냄 (데이터 프로퍼티와 동일)

<br />

```javascript
/* 딥다이브 예제 16-06 */

const person = {
  firstName: 'Ungmo',
  lastName: 'Lee',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
}

// getter 함수 호출 : fullName의 값을 읽어옴
console.log(person.fullName);    // Ungmo Lee

// setter 함수 호출 : fullName에 다른 값을 저장
person.fullName = 'Heegun Lee';
console.log(`${person.firstName} ${person.lastName}`)   // Heegun Lee

// 다시 getter 함수 호출 : fullName의 값을 읽어옴  // Heegun Lee
console.log(person.fullName);
```

<br />
<br />

## 프로퍼티 정의하는 방법

<br />

### `Object.defineProperty`

- 새로운 프로퍼티 추가할 때 프로퍼티 어트리뷰트를 명시적으로 작성해주거나,    
  이미 기존에 존재하는 프로퍼티의 어트리뷰트를 재정의하고 싶을 때 사용하는 메서드이다!

- 프로퍼티를 정의할 때 프로퍼티 디스크립터 객체의 **프로퍼티 value 또는 플래그들의 값을 명시하지 않으면**   
  **undefined, false가 기본값으로 정의된다!!**

<br />

> [형태]    
>
> `Object.defineProperty(obj, propertyName, descriptor)`   

<br />

***[예제] Object.defineProperty 사용하기***

```javascript
/* 딥다이브 예제16-08 참고 */

const person = {};

Object.defineProperty(person, "lastName", {
  value: "Lee"
});

const descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log(descriptor);
// {value: 'Lee', writable: false, enumerable: false, configurable: false}
```

✅    `Object.defineProperty`메서드 세번째 인수로 디스크립터 객체를 전달해야 하는데 플래그들의 값을 명시해주지 않았기 때문에    
  writable, enumerable, configurable 모두 값이 false로 지정되었다.

<br />
<br />

만약 value값도 작성하지 않았다면 undefined가 할당된다!!    
(get과 set도 별도로 명시해주지 않으면 undefined가 할당됨!!)

```javascript
// value값도 전달되지 않은 상황

Object.defineProperty(person, "lastName", {});

const descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log(descriptor);
// {value: undefined, writable: false, enumerable: false, configurable: false}
```
<br />

⛔ 참고로 플래그 값들이 false로 설정되었기 때문에 값을 변경하거나,    
반복문을 활용해서 나열하는 등 값을 처리할 수 없다!

```javascript
// writable: false 인 상황에서 lastName값 변경을 시도했을 떄

Object.defineProperty(person, "lastName", {});

const descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');

person.lastName = 'Kim';
console.log(person.lastName);    // undefined
```
lastName에 Kim을 할당했으나, writable플래그 속성이 false로 정의되어 있어 값이 변경되지 않은 것을 볼 수 있다.    
(이때 별도의 에러메세지는 발생하지 않는다!)

<br />
<br />

***[연습] 일반적으로 프로퍼티를 생성할 때와 `Object.defineProperty`메서드로 프로퍼티 생성했을 때 비교하기***

```javascript
const person = {
    firstName: 'haha'
};

Object.defineProperty(person, "lastName", {
  value: "Lee"
});

const descriptor1 = Object.getOwnPropertyDescriptor(person, 'firstName');
const descriptor2 = Object.getOwnPropertyDescriptor(person, 'lastName');

console.log(descriptor1);
// {value: 'haha', writable: true, enumerable: true, configurable: true}

console.log(descriptor2);
// {value: 'Lee', writable: false, enumerable: false, configurable: false}
```

<br />

🧡헷갈리지 말기!💛    

일반적인 방법으로 객체에 프로퍼티를 만들었을 땐, 플래그의 값이 true로 설정되어 있다.    
 
하지만 `Object.defineProperty`메서드를 통해서 프로퍼티를 만들 때 플래그 값을 true로 명시해주지 않으면 기본적으로 false값으로 정의되는 것을 기억하자!

<br />
<br />

### `Object.defineProperties`
- `Object.defineProperty`메서드는 한번에 1개의 프로퍼티만 정의할 수 있으나,   
  `Object.defineProperties` 메서드는 한번에 여러개의 프로퍼티를 정의할 수 있다.

<br />
<br />

## 객체 변경 방지
- 아래 각각의 메서드들을 통해 객체 변경을 금지할 수 있다.
- **얕은 변경 방지** 이기 때문에 중첩된 객체에는 영향을 미치지 못한다❗❗


구분 |	메서드 |	프로퍼티 <br /> 추가 |	프로퍼티 <br /> 삭제	| 프로퍼티 <br /> 값 읽기 |	프로퍼티 <br /> 값 쓰기 | 프로퍼티 <br /> 어트리뷰트 재정의
|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
객체 <br /> 확장 금지 | Object.preventExtensions |	✕ |	○ |	○ |	○ |	○
객체 밀봉 |	Object.seal |	✕ |	✕ |	○ |	○	| ✕
객체 동결	| Object.freeze |	✕ |	✕ |	○ |	✕ |	✕

<br />
<br />

### `Object.preventExtensions(obj)`
- 객체에 새로운 프로퍼티를 추가할 수 없도록 만드는 메서드 (객체 확장 금지)

<br />

### `Object.seal(obj)`
- 객체를 밀봉시키는 메서드
- 새로운 프로퍼티 추가 불가능, 기존 프로퍼티 삭제 불가능
- 값을 읽거나 수정은 가능함!
- 프로퍼티 어트리뷰트 재정 금지 (즉, 플래그 수정 불가능)    
  (프로퍼티 전체에 configurable: false, writable: false를 설정하는 것과 동일하다!)


<br />

### `Object.freeze(obj)`
- 새로운 프로퍼티 추가나 기존 프로퍼티 삭제, 수정 불가능
- 프로퍼티 어트리뷰트 재정 금지 (즉, 플래그 수정 불가능)
- ONLY 값 읽기만 가능!

<br />
<br />

### 불변 객체로 만드는 방법

```javascript
function freeze(obj) { 
  Object.keys(obj).forEach((key) => 
    typeof obj[key] === "object" ? freeze(obj[key]) : Object.freeze(obj) 
  ); 
}
```




