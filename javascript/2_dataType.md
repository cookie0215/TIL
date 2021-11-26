# [TIL] JS_자료형(Data Type)
- data type(데이터타입, 자료형) : 값의 종류
- 원시타입과 객체 타입으로 구분
> **원시타입**
>  - 숫자형 (Number) : 숫자와 정수 실수 구분없이 하나의 숫자 타입만 존재
>  - 문자열 (String) : 문자 형태, 입력 시, "" 또는'' 를 통해 사용
>  - 논리형 (Boolean) : 논리적 참(true)와 거짓 (false)
>  - undefined : var키워드로 선언된 변수에 암묵적으로 할당되는 값
>  - null : 값이 없음을 의도적으로 명시할 때 사용하는 값
> **객체타입**
>  - 배열 (arry | object)
>  - 객체 (object | object)


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

> Escape Sequence (이스케이프 시퀀스)
> : 일반 문자열내에서 줄바꿈이 허용되지 않기 때문에 \ (백슬래쉬)를 이용해 줄바꿈, 공백등 다양하게 문자열을 처리할 수 있다.

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


- +기호 또는 ${} 를 이용해 표현식을 삽입할 수 있다.
(+기호는 일반문자열내에서, ${}는 ``(백틱)을 이용한 템플릿리터럴 내에서 사용됨 )

```javascript
var name = "돌탱";
var age = 20;

console.log("내 이름은"+ firstName + "이고, 나이는" + age + "살 이야!");
console.log(`내 이름은 ${firstName}이고, 나이는 ${age}살 이야!`);
```

<br>
<br>

## Boolean(논리형)
- true 또는 false를 반환한다.

```javascript
console.log(0 == '');    // true
console.log(0 === '');   // false (데이터 타입까지 모두 같아야 되기 때문, ''의 type은 string 이다.)

console.log(1 == ture);   // true (컴퓨터상에서 0 은 false , 1은 true를 의미)
console.log(0 == false);  // true (컴퓨터상에서 0 은 false , 1은 true를 의미)
console.log(0 === false); // false (데이터 타입이 다르기 때문에..)
```

## Undefined
- 보통 var키워드로 변수를 선언만 했을 때 undefined 값이 할당됨