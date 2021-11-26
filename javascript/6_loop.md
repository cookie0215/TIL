# [TIL] JS_반복문

### for문

```javascript
for(초기값; 조건식; 증감식){
    // 조건에 만족할 때 실행문이 실행됨
    실행문; 
}
```
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

***[예제2] <li>를 스크립트로 생성하여 아래 배열들을 각각 <ul>, <ol> 태그에 넣기*** 

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
