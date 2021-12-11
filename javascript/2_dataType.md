# [TIL] JS_자료형(Data Type)
- data type(데이터타입, 자료형) : 값의 종류
- 원시타입과 객체 타입으로 구분

<br>

> **원시타입**  
>  - 숫자형 (Number) : 숫자와 정수 실수 구분없이 하나의 숫자 타입만 존재  
>  - 문자열 (String) : 문자 형태, 입력 시, "" 또는'' 를 통해 사용  
>  - 논리형 (Boolean) : 논리적 참(true)와 거짓 (false)  
>  - undefined : var키워드로 선언된 변수에 암묵적으로 할당되는 값  
>  - null : 값이 없음을 의도적으로 명시할 때 사용하는 값  
> **객체타입**  
>  - 배열 (arry | object)  
>  - 객체 (object | object)  

<br>

## Number (숫자형)
- 모든 수를 '실수' 형태로 처리

```javascript
var x = 10;         // 정수
var y = 15.1234;   // 실수
var z = -20;      // 음의 정수
```
```javascript
// 숫자 10이 정수 형태로 출력된것 처럼 보이지만
//실상은 10.0 실수형태로 처리된 것이므로 아래의 코드는 true가 출력된다.
console.log(10 === 10.0);

// true 출력
```

<br>

- number타입에는 infinity , -infinity, NaN 값이 존재한다.

```javascript
console.log(10/0);      // infinity
console.log(10/-0);    // -infinity
console.log(1 * "3");  // NaN  :  숫자가 아님을 의미
```

<br>
<br>

## String (문자열)
- "" , '' , `` 을 이용해 문자열을 표기
- 템플릿 리터럴 : ES6부터 ``(백틱)으로 표기할 수 있도록 만들어짐
   - ``(백틱)을 이용해서 문자열을 표기하면 그 안에서 이스케이프 시퀀스를 사용하지 않아도 공백, 줄바꿈이 허용된다.

<br>

> Escape Sequence (이스케이프 시퀀스)  
> : 일반 문자열내에서 줄바꿈이 허용되지 않기 때문에 \ (백슬래쉬)를 이용해 줄바꿈, 공백등 다양하게 문자열을 처리할 수 있다.  

<br>

| 이스케이스 시퀀스 | 의미 |  
| :--: | :-- |
| \0 | null |
| \b | backspace(백스페이스) |
| \f | form feed : 프린터로 출력 시, 다음 페이지의 시작 시점으로 이동 |
| \n | line feed : 다음행으로 이동 |
| \r | carriage return : 커서를 처음으로 이동 |
| \t | Tab (수평) |
| \v | Tab (수직) |
| \' | 작은 따옴표 표시 |
| \" | 큰 따옴표 표시 |
| \\ | 백슬래쉬 표시 |

<br>

- +기호 또는 ${} 를 이용해 표현식을 삽입할 수 있다.
(+기호는 일반문자열내에서, ${}는 ``(백틱)을 이용한 템플릿리터럴 내에서 사용됨 )

<br>

```javascript
var name = "돌탱";
var age = 20;

console.log("내 이름은"+ firstName + "이고, 나이는" + age + "살 이야!");
console.log(`내 이름은 ${firstName}이고, 나이는 ${age}살 이야!`);
```

<br>
<br>

## Boolean (논리형)
- true 또는 false를 반환한다.

```javascript
console.log(0 == '');    // true
console.log(0 === '');   // false (데이터 타입까지 모두 같아야 되기 때문, ''의 type은 string 이다.)

console.log(1 == ture);   // true (컴퓨터상에서 0 은 false , 1은 true를 의미)
console.log(0 == false);  // true (컴퓨터상에서 0 은 false , 1은 true를 의미)
console.log(0 === false); // false (데이터 타입이 다르기 때문에..)
```

<br>
<br>

## Undefined
- 변수를 키워드로 선언 후, 아직 값을 할당하지 않은 상태  
→ 보통 var키워드로 변수를 선언만 했을 때 undefined 값이 할당됨
- **자료형이 결정되지 않은 상태**이기 때문에 데이터 타입은 undefined가 반환되는 것이다!

<br>

## Null 
- 값을 의도적으로 비어 있는 값으로 만들고 싶을 때 사용  
→ 변수를 키워드로 선언 후, null 이라는 값을 의도적으로 할당한 것!
- document.querySelector 메서드는 조건에 맞는 html요소를 검색할 수 없을 때,  
  에러 대신 `null` 값을 반환한다.
- null의 데이터 타입은 **object를 반환**한다!!!

```html
<body>
  <script>
    var ele = document.querySelector('.text');

    console.log(ele);
    // null 출력
    // html요소안에 .text 클래스명을 갖는 요소가 존재하지 않기 때문에!
  </script>
</body>
```
<br>

***[알아두기] null과 undefined는 `==` (동등 연산자)로 비교 시, 특별한 규칙에 의해 true를 반환 한다***
```javascript
console.log(null == undefined);  // true

console.log(null == 0);         // false
console.log(undefined == 0);    // false
````
→ 둘을 서로 비교하면 특별한 규칙에 의해 암묵적으로 강제 형 변환이 발생해 true를 반환하게 된다.  
하지만 각각 다른 자료형과 동등 연산자로 비교를 시키면 강제 형 변환이 발생하지 않는다는 점을 유의하자!!!

<br>
<br>

### Symbol
- ES6에서 추가된 7번째 타입, 변경이 불가능한 원시 타입의 값
- 다른 값과 중복되지 않는 유일한 값을 의미

<br>
<br>

## Array (배열)
- 여러 데이터를 **`[  ]` 대괄호 안에 순차적으로 저장**한다.
- 배열의 변수명을 되도록 변수명을 복수 형태로 만들어 주는 것이 좋다.
- 중첩배열 : 배열안에 또 다른 배열을 만들 수 있다.

<br>

```javascript
var generals = ['허준','이순신','장보고'];
console.log(generals[2]);    // 장보고 출력
```

<br>
<br>

## Object (객체)
- 여러 데이터를 **`{ }` 중괄호 안에 key : value 형태로 저장**하는 것

<br>

```javascript
let user = {
	name: 'amy',
	age: 20,
	married: false,
}

console.log(user.married);
// false 값 출력
```

<br>
<br>

---

<br>

## 데이터 타입의 필요성
- 변수에 할당되는 값의 데이터 type에 따라 확보해야 할 메모리 공간의 크기가 결정되기 때문
- 값을 참조할 때에도 한번에 읽어야 할 메모리 셀의 크기(메모리 공간 크기)를 결정해야 하기 때문.
  
  > 값을 참조할 때 메모리 셀의 크기를 어떻게 알까?  
  > → 참조할 변수에 데이터타입이 구분되는 값이 할당되어 있기 때문에    
  >  자바스크립트 엔진이 변수를 해당 타입으로 인식하고, 해당 타입은 n비트의 단위로 저장되어 있기 때문에   
  >  식별자(변수명)를 참조하면 바로 메모리 공간의 크기를 알 수 있는 것이다.   

  *참조 : 변수에 저장된 값을 읽는 것*

<br>

