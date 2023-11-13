# [TIL] JS_반복문
카테고리 메뉴 리스트, 댓글 등을 반복적으로 표시하고 싶을 때  
반복문을 통해 좀 더 간결하게 작성할 수 있다.

<br />

## for문

> ```javascript
> for(초기값; 조건식; 증감식){
>    // 조건에 만족할 때 실행문이 실행됨
>    실행문; 
> }
> ```

<br>

***[예제1] 1~20까지 숫자 중 빈배열에 반복문을 활용해 각각 짝수배열, 홀수 배열 만들기*** 

```javascript
const oddArr = [];
const evenArr = [];

for(let num=1; num<=20; num++){
  if(num%2 === 0){
      evenArr.push(num);
  }else {
      oddArr.push(num);
  }
}
console.log(oddArr);
console.log(evenArr);

```

<br>

***[예제2] `<li>`를 스크립트로 생성하여 아래 배열들을 각각 `<ul>`, `<ol>` 태그에 넣기*** 

```html
<ul></ul>
<ol></ol>
```

```javascript
var things = ['냉장고', '코끼리', '기린'];
var steps = [
  '냉장고 문을 연다',
  '기린을 꺼낸다',
  '코끼리를 넣는다',
  '냉장고 문을 닫는다'
];
```

<br>

*풀이*

```javascript
var things = ['냉장고', '코끼리', '기린'];
var steps = [
  '냉장고 문을 연다',
  '기린을 꺼낸다',
  '코끼리를 넣는다',
  '냉장고 문을 닫는다'
];

const ul = document.querySelector("ul");
const ol = document.querySelector("ol");


for(let i=0; i<things.length; i++){
    const li = document.createElement("li");
    li.innerHTML = things[i];
    ul.append(li);
}

for(let j=0; j<steps.length; j++){
    const li = document.createElement("li");
    li.innerHTML = steps[j];
    ol.append(li);
}
```

<br />
<br />

## `for in`
- 객체의 모든 열거 가능한 속성을 임의의 순서로 순회한다.  
  → 즉, 배열, 객체 모두 사용이 가능하며  
  배열일 땐 루프변수에 **인덱스**가, 객체일 땐 루프변수에 **key**를 넣어 접근한다.  
  (object데이터에 for in사용 시, value값에 직접적으로 접근 불가능하다!)
- 순서가 보장되지 않을 수 있기 때문에 순서가 중요한 로직에는 사용하지 않는 것이 좋다!

<br />

> ```javascript
> for(let 루프변수 in 배열 또는 객체){
>    실행문; 
> }
> ```

<br />

***[연습1] 객체 데이터에 for in문을 사용해 key-value형태로 출력하기***

```javascript
const person = {
  name: "cookie Kim",
  age: 20,
  married: false
}

for(let key in person) {
  console.log(`${key} , ${person[key]}`);
}

// name , cookie Kim
// age , 20
// married , false
```
person객체의 프로퍼티 갯수만큼 순회하면서, `for...in`문의 루프변수(변수선언문 부분)에 person객체가 갖고 있는 프로퍼티 key를 할당한다.   
→ 그래서 3개의 프로퍼티 key (name, age, married)를 반환함

<br />
<br />

## `for of`
- 반복 가능한 객체(iterable)를 순회할 수 있도록 만들어진 ES6 메서드  
  → 배열에서 for in문 사용 시, value값에 접근할 수 없어서 index값을 넣어 접근했는데,   
  for of는 루프변수에 해당 요소값을 넣어 직접 접근할 수 있다!
- 하지만 **객체에 for of문을 사용하면 TypeError를 발생시킨다!!!**

<br />

> ```javascript
> for(let 루프변수 of 배열 또는 객체){
>    실행문; 
> }
> ```

<br />

***[연습1] 객체 데이터에 for in문을 사용해 key-value형태로 출력하기***

```javascript
const users = [
  { name: "Park", age: 25, married: false },
  { name: "Kim", age: 30, married: true },
  { name: "Lee", age: 35, married: false },
]

for(let user of users) {
  console.log(user);
}

// {name: 'Park', age: 25, married: false}
// {name: 'Kim', age: 30, married: true}
// {name: 'Lee', age: 35, married: false}
```