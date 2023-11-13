# [TIL] JS_생명주기

*< 관련 내용 참고하기 >*    
[변수 개념](https://github.com/cookie0215/TIL/blob/main/javascript/1_variable.md)   
[스코프 개념](https://github.com/cookie0215/TIL/blob/main/javascript/15_scope.md)   
[var,let, const 비교](https://github.com/cookie0215/TIL/blob/main/javascript/17_변수키워드.md)   

<br />

## Life Cycle (생명주기)

<br />

### 전역 변수의 생명주기
- 전역 변수는 자신이 선언된 위치에서 생성되고 소멸됨
- 함수 호출처럼 별도의 진입점이 없기 때문에 코드가 바로 생성 실행됨    
  그리고 return문을 전역에서 사용할 수 없기 때문에 마지막 문이 실행되고     
  더이상 실행될 문이 없을 때 종료됨
- var키워드로 선언한 전역 변수는 전역객체인 window의 프로퍼티이기 때문에    
  웹페이지를 닫기 전까지 `var 변수`는 유효한 상태이다!

<br />
<br />

### 지역 변수의 생명주기
- 함수 내부에서 선언된 지역 변수는 함수 호출 시, 생성(선언)되고 함수 종료 시, 소멸됨

<br />

![지역변수 생명주기](https://user-images.githubusercontent.com/81572770/150374071-360ed114-b6f0-41f5-97a1-f3fcc5b7ad17.png)

→ 변수 x는 함수가 종료되는 순간에 변수 x도 소멸되었기 때문에    
함수 밖에 있는 `console.log(x)`는 에러가 출력되는 것이다!

<br />

***[예제]***
```javascript
// 딥다이브 14-02

var x = 'global';

function foo(){
  console.log(x);
  var x = 'local';
}

foo();
console.log(x);

```
정답 ⭕    
  undefined 출력

<br />

✅이유  
  foo()함수가 호출되면 함수 내부로직이 실행되기 전,          
  호이스팅에 의해 변수 x 선언문이 가장 먼저 실행된다!       
  *(변수 호이스팅은 스코프 단위로 동작!)*    

  여기서 `var x = 'local';`는 현재 변수 선언과 변수 할당이 같이 작성되어 있는 것일 뿐,    
  호이스팅 되는 부분은 `var x;` 부분이다.    
  그리고 변수 선언 시, 맨 처음 할당되는 값은 undefined이기 때문에 undefined가 출력된다!

<br />
<br />
<br />

## 전역 변수의 문제점

### 암묵적 결합 (implicit coupling)
- 모든 코드가 전역 변수를 어디서든지 참조하고 변경할 수 있게 허용하는 것
- 변수의 유효범위가 클수록, 가독성은 떨어지고 위험성은 높아짐

<br />

***[연습] foo()함수 호출 시, 출력될 값은?***

```javascript
var x = 10;

function foo () {
  y = 20;
  console.log(x + y);
}

foo();
```

정답 ⭕    
  30 출력

<br />

✅이유
  현재 y는 키워드로 선언되지 않은 채 값만 할당 되어 있는 상태이니, 에러가 발생할 거 같지만     
  30 이라는 값이 출력된다.    
  
  → 왜냐하면 식별되지 않은 변수에 값을 할당하면 **전역 객체(window)의 프로퍼티가 되기 때문에**   
  `y = 20;`을 마치 선언된 변수처럼 `window.y = 20;` 이렇게 해석해 동작시킨다!!    

  *(하지만 호이스팅이 발생하진 않는다!!)*

<br />
<br />

### 긴 생명주기
- 전역 변수는 별도의 진입점과 반환문을 사용할 수 없어 생명주기가 길다.     
  → 메모리 리소스 등 자원을 지속적으로 소비함

<br />

### 스코프 체인에서 종점에 존재로 인한 느린 속도
- 변수 검색 시, 전역 변수를 가장 마지막에 찾기 때문에 전역 변수의 검색 속도가 가장 느리다.

<br />

### 네임스페이스 오염
- 파일이 분리되어 있어도 전역 스코프를 공유하는 경우, 코드 오염이 생길 수 있다.

<br />
<br />

## 전역 변수 억제 방법

### 즉시실행 함수(IIFE) 사용
- 전역 변수 사용을 억제하기 위해 모든 코드를 즉시 실행 함수로 감싸면 그 안의 변수는 모두 지역 변수가 된다.

<br />

```javascript
// 딥다이브 예제 14-4

(function () {
  var foo = 10;
  // ...
}());

console.log(foo); // ReferenceError: foo is not defined

```

<br />
<br />

### 네임스페이스 객체
- 전역에 네임스페이스 역할을 담당할 객체를 생성 후,    
  사용하고 싶은 변수를 프로퍼티로 추가하는 방법

```javascript
// 딥다이브 예제 14-5

var MYAPP = {}; // 전역 네임스페이스 객체 

MYAPP.name = 'Lee'; 
console.log(MYAPP.name); // Lee
```

<br />

***[예제] 즉시실행함수와 네임스페이스 객체를 계층적으로 구성한 예제***

```javascript
(function () {
  var MYAPP = {};

  MYAPP.student = {
    name: 'Lee',
    gender: 'male'
  };

  console.log(MYAPP.student.name);   // Lee
}());

console.log(MYAPP.student.name);
//  MYAPP is not defined
```
<br />
<br />

### 모듈패턴

> *모듈이란?*   
> - 어플리케이션을 구성하는 개별 요소로, 재사용 가능한 코드 조각을 의미
> - 기능을 기준으로 파일 단위로 분리

<br />

- 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만드는 것   
  
  → 자바스크립트파일을 여러개로 분리해 `<script>`로 가져온다해도 **분리된 모든 자바스크립트 파일은 하나의 젼역을 공유하기 때문에** 전역 변수가 중복될 수 있는 여러 문제가 발생할 수 있기 때문에 모듈 형태로 만들기 시작함

- 클로저를 기반으로 동작

<br />

```javascript
// 딥다이브 예제 14-7

var Counter = (function() { 
  //private 변수 
  var num = 0; 
  
  //외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
  return { 
    increase(){ 
      return ++num; 
    }, 
    decrease(){ 
      return --num; 
    } 
  }
}()); 
  

  console.log(Counter.num); //undefined 
  console.log(Counter.increase()); //1 
  console.log(Counter.increase()); //2 
  console.log(Counter.decrease()); //1

```
→ 변수 num은 즉시실행함수 내부에 존재하기 때문에 외부에 있는 `Counter.num`이 내부로 접근할 수 없다.   

  반면에 `increase()`와 `decrease()`는 return을 통해 외부로 반환하고 있기 때문에    
  외부에서 사용할 수 있다.

<br />
<br />

### ES6 모듈 (EMS)

> 형태    
>   
> ```html
> <script type="module" src="app.mjs"></script>
> ```

<br />

- ES6는 파일 자체의 독자적인 모듈 스코프를 제공   
  → 즉, `<script>`태그에 `type="module"`속성을 작성해 놓으면 자바스크립트 파일이 모듈로써 동작한다.   
  *(참고로 ES6모듈임을 명확하게 보여주기 위해 확장자명을 `mjs` 로 사용할 것을 권장함)*
- 모듈 내에서 var로 선언한 변수는 전역 변수도 아니고, window (전역 객체)의 프로퍼티도 아니다!
- 아직까지 모든 브라우저가 ES6를 전부 지원하고 있지 않기 때문에, SystemJS, RequireJS,Webpack등의 모듈 번들러를 이용

<br />
<br />