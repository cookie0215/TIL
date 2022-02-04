# [TIL] JS_배열 관련 속성들

### 목차 

[- length](#length)    
[- indexOf](#indexof)    
[- `push()`](#push)    
[- `concat()`](#concat)     
[- `splice()`](#splicestart-delete)     
[- `Math.sort()`](#mathsortcomparefunction)     


<br />
<br />

## `length`
- 배열의 전체길이를 구할 때 사용

> arry[0] : 배열의 첫번째 요소를 구할 때    
> arry.length - 1    
> : 배열의 전체 길이를 모르는 상태에서 마지막 번째 요소를 구하고 싶을 때 배열전체(arry.length)에서 - 1을 해줘야 한다!   
>  이유) 배열의 순번은 0번부터 시작하기 때문! 

<br>

```javascript
var mutiTypes = [100, true, "hello", [2,5,true,[10, "bye"]]];

console.log(mutiTypes[2]);          // "hello" 출력
console.log(mutiTypes[3][0]);       // 2 출력
console.log(mutiTypes[3][3][1]);   // "bye" 출력
console.log(mutiTypes[3].length);  // 4 출력 : 4번째에 위치한 [2,5,true,[10, "bye"]] 의 길이를 구한다는 의미

console.log(mutiTypes[0]);  // 배열의 첫번째 요소를 구하고 싶을 때 사용
console.log(mutiTypes.length - 1);  // 배열의 마지막 요소를 구하고 싶을 때 사용 (배열의 전체 길이를 모른다고 가정)
```

<br>
<br>

## `indexOf`
- 여러개 일치하는 데이터의 첫번째 index를 반환한다!!
- 특정 값이 배열의 몇번째 요소인지 반환
- 해당 배열안에 내가 찾는 요소가 없다면 -1을 반환

<br>

```javascript
var fruitArr = ["apple", "banana", "orange"];

console.log(fruitArr.indexOf('orange'));   // 2 출력 (orange 요소가 3번째에 위치해 있음을 알 수 있다.)
console.log(fruitArr.indexOf('mango'));    // -1 출력 (mango 요소가 현재 배열안에 없음을 알 수 있다.)
```

<br>
<br>

## 배열 내 요소 변경하는 방법
- 원래 있는 배열의 순번에 다른 값을 할당해주면 된다.

<br>

```javascript
var classMate = ["Kim", "Lee", "Park"];
classMate[1] = "Choi";
console.log(classMate[1]);     // Choi 출력
```

<br>
<br>

## `push()`
-  배열에 새로운 요소를 삽입 (배열의 마지막에 요소가 삽입된다.)

<br>

```javascript
var classMate = ["Kim", "Lee", "Park"];
classMate.push("Nam");

console.log(classMate);   // ['Kim', 'Lee', 'Park', 'Nam'] 출력
```

<br>
<br>

## `concat()`
- **원본 배열의 마지막 요소**에 전달 받은 **인수 값들을 추가**해 **새로운 배열을 반환**한다.    
    → 원본 배열을 직접 변경하는 것이 아니라 새로운 배열을 반환하는 것이다!
- push메서드와 unshift 메서드를 대체해서 concat을 사용 가능하나,  
  *push메서드와 unshift 메서드는 원본 배열을 직접 변경해 반환한다*는 차이점이 있다.

<br>

***[예제1] concat을 이용해서 배열을 이어붙였지만, 변수에 담지 않고 출력한 상태***

```javascript
let num = [2,4,6];
let newNum = num.concat(1,3);

console.log(num);  // [2, 4, 6] 
console.log(newNum);  // [2, 4, 6, 1, 3]

```

<br>

***[예제2] concat을 이용해서 2개의 배열을 이어붙인 후, 새로운 변수에 담아 출력***

```javascript
const arr1 = [1,2];
const arr2 = [3,4,5];

const arr3 = arr1.concat(arr2);

console.log(arr1);     // [1, 2]
console.log(arr3);     // [1, 2, 3, 4, 5]
```

<br>

***[예제3] concat을 이용해서 문자열 이어붙이기***

```javascript
var str1 = "블랙";
var str2 = "핑크";

console.log(str1.concat(str2));   // 블랙핑크 출력
```

<br>

***[예제4] concat을 이용해서 배열에 배열을 이어붙이기***

```javascript
var num = [2,4,6];
num = num.concat(num);

console.log(num);
// [2, 4, 6, 2, 4, 6] 이 출력된 것을 볼 수 있다.
```

<br>

***[예제5] 요소를 마지막 위치가 아닌 첫번째 위치에 이어붙이고 싶은 땐..?***

```javascript
var num = [2,4,6];
num = [0].concat(num);

console.log(num);
// [0, 2, 4, 6] 이 출력된 것을 볼 수 있다.
```

<br>

***[예제6] 한번에 여러 개의 값을 추가하기***

```javascript
const arr1 = [1,2];
const arr2 = [3,4,5];

const arr3 = arr1.concat(arr2 , 10, "100" , "hello");

console.log(arr3);    // [1, 2, 3, 4, 5, 10, "100" , "hello"]
```

<br>
<br>
<br>


## `splice(start, delete)`
- 원본 배열의 **중간에 있는 요소들을 추가하거나 제거**하고 싶을 때 사용하는 메서드
  → start번째(위치)부터 delete갯수의 요소를 제거하고 싶을 때 사용
- **원본 배열을 직접 변경**한다.
- 3개의 매개변수(인수)를 전달 받을 수 있다.
  - 첫번째 인수 (start)
    - 원본 배열의 요소를 제거하려고 할 때 시작하는 인덱스 값
    - 인수가 1개밖에 없다면 시작 위치부터 끝까지 요소 값이 제거됨
    - 음수 값으로 지정했다면, 마지막에서 n번째 요소를 의미한다
    
    ex) splice(2); 원본 배열의 인덱스 2번 (3번째)에 위치하는 값부터 끝까지 제거 된다!
      
  - 두번째 인수 (deleteCount)
    - 첫번째 인수 값부터 시작해 총 제거할 요소의 갯수를 의미
    - 값이 0인 경우, 아무런 요소도 제거되지 않는다.
  - 세번째 인수 (items)
    - **제거한 위치에 다른 요소들을 삽입**할 수 있다!
    - 값을 생략할 경우, 원본 배열의 요소들만 제거 되고 삽입되지는 않는다!

<br>

```javascript
var even = [0, 2, 4, 6, 8, 10, 12, 14];
even.splice(2,3);

console.log(even);
// [0, 2, 10, 12, 14] 출력 >>> 4, 6, 8 제거됨
```

```javascript
var even = [0, 2, 4, 6, 8, 10, 12, 14];
even.splice(even.length-1,1);

console.log(even);
// [0, 2, 4, 6, 8, 10, 12] 출력 >>> 14 만 제거됨
```

<br>

***[예제1] splice 메서드 사용하기***

```javascript
const arr = [1,2,3,4];
arr.splice(1,2,100,30,7);

console.log(arr);     // [1, 100, 30, 7, 4]
```
→ arr배열에서 인덱스 1번부터 시작해 2개의 아이템(2, 3)을 제거한다.  
제거된 2, 3번 자리에 100, 30 이라는 값이 추가 되어 `arr = [1,100,30,7,4]` 이렇게 변경된다.

<br>

***[예제2] splice 메서드의 두번째(deletCount) 인수 값이 0일 때***

```javascript
const arr = [1,2,3,4];
arr.splice(1,0,100,30);

console.log(arr);     // [1,100,30,2,4]

```
→ 일단 첫번째 인수값이 1 이므로 인덱스 1번 위치에서 시작한다. 그리고 제거하려는 갯수를 봤더니 두번째 인수값이 0 이기 때문에 아무런 요소가 제거 되지 않고, 세번째 요소들을 그 시작 위치 자리에 삽입하는 것이다!

<br>

***[예제3] splice 메서드 start인수 값이 음수일 때***

```javascript
const arr = [1,2,3,4];
const arr2 = arr.splice(-3,2);

console.log(arr);     // [1,4] : 원본 배열에 남아 있는 요소들
console.log(arr2);    // [2,3] : 원본 배열에서 지워진 값들을 보여줌
```
→ start인수값이 -3 으로 배열 요소 중 맨 뒤에서부터 시작해 3번째에 위치한 요소부터 제거하겠다는 의미이다. 그래서 뒤에서 3번째 위치인 요소 2가 제거될 예정이고, 두번째 인수값으로 2를 전달 받았으니 시작 위치에서 요소 2개를 지워야 하기 때문에 2,3이 제거된 것이다.  

⇒ 그래서 arr 를 출력해보면 원본 배열 안에 [1,4] 만 남아 있는 결과를 볼 수 있다.  

참고로 splice 메소드를 사용할 때 **새로운 변수 arr2에 담게 되면 arr2는 제거된 요소가 무엇인지 배열 형태로 알려준다!**  

<br>
<br>
<br>

## `Math.sort([compareFunction])`
- 요소의 순서를 결정하는데 사용되는 함수
- 배열에서 값을 정렬하여 반환할 때 사용된다. (**기존의 배열 자체를 정렬**시켜서 반환!)
- 기본값은 **오름차순**으로 정렬
- compareFunction : 정렬 순서를 정의하는 함수
    - 해당 compareFunction부분을 생략하면 유니코드의 값에 따라 자동으로 정렬됨 (오름차순)
    - 숫자는 ASCII 코드 순서로 정렬되기 때문에 우리가 생각했던 순서대로 정렬되지 않음을 볼 수 있다.
    - compareFunction이 리턴값이 **0보다 작을 경우** (리턴값 < 0): a가 b보다 앞에 오도록 정렬
    - compareFunction이 리턴값이 **0일 경우** (리턴값 == 0): a와 b의 순서가 바뀌지 않는다.
    - compareFunction이 리턴값이 **0보다 클 경우** (리턴값 > 0): b가 a보다 앞에 오도록 정렬

> *오름차순* : 작은 것부터 큰 것으로 가는 순서  ex) 1 2 3 4 5 6 7 8 9 
> *내림차순* : 큰 것으로부터 작은 것으로 가는 순서  ex) 9 8 7 6 5 4 3 2 1

<br>

***[예제1] 매개변수 (compareFunction부분) 를 생략한 경우***

```javascript
const nums = [3,1,5,10,12];

nums.sort();
console.log(nums);   // [1, 10, 12, 3, 5] 가 출력!
```
<br>

> 위의 예제에서 매개변수값을 입력하지 않았을 때, 오름차순으로 자동 정렬되기 때문에
> [1, 3, 5, 10, 12] 로 출력될 것이라고 생각했지만 [1, 10, 12, 3, 5] 으로 출력된 것을 볼 수 있다!
>   이유: ASCII 코드 순서에 따라 정렬될 때 일시적으로 숫자타입을 문자열로 바뀌는 형변환이 발생하기 때문이다.

<br>

***[예제2-1] 예제1번을 올바르게 오름차순으로 정렬하기***

```javascript
const nums = [3,1,5,10,12];
function compare(a,b){
    if( a > b ) return 1;
    if( a === b ) return 0;
    if( a < b ) return -1;
}
nums.sort(compare);
// [1, 3, 5, 10, 12] 출력
```

<br>

***[예제2-2] 예제1번을 올바르게 오름차순으로 정렬하기***

```javascript
// 위의 예제2-1을 삼항연산자를 활용해 사용
const nums = [3,1,5,10,12];
nums.sort(function compare(a,b) {
    return a > b ? 1 : -1
});

// [1, 3, 5, 10, 12] 출력
```

<br>

***[예제2-3] 예제1번을 올바르게 오름차순으로 정렬하기***

```javascript
// 위의 예제2-1을 단순화 시킨 형태
const nums = [3,1,5,10,12];
function compare(a,b){
    return a - b;
}
nums.sort(compare);
// [1, 3, 5, 10, 12] 출력
```

<br>

***[예제3] 예제1번을 내림차순으로 정렬하기***

```javascript
const nums = [3,1,5,10,12];
function compare(a,b){
    return b - a;
}
nums.sort(compare);
// [12, 10, 5, 3, 1]
```

- sort()를 활용해 객체들의 key값을 정렬시킬 수도 있다.

***[예제4] 이름순으로 정렬하기 (오름차순)***
```javascript
const classmate = [
    {
        name: "반해원",
        age: 19,
    },
    {
        name: "김나라",
        age: 24,
    },
    {
        name: "차미나",
        age: 32,
    },
    {
        name: "김천재",
        age: 12,
    },
    {
        name: "오승아",
        age: 15,
    },
]

function compare(a,b){
    return a.name > b.name ? 1 : -1
}

classmate.sort(compare);

/*
0: {name: '김나라', age: 24}
1: {name: '김천재', age: 12}
2: {name: '반해원', age: 19}
3: {name: '오승아', age: 15}
4: {name: '차미나', age: 32}
*/
```

<br>
<br>

### `filter(callback(element[, index[, array]])[, thisArg])`
- 특정 조건에 일치하는 배열의 모든 값을 배열 형태로 반환
  즉, 요소의 조건을 판단하는 함수로, 조건에 ture이면 요소가 남아있고 false라면 요소가 제외된다.
- 조건에 일치하는 배열 값이 없을 경우, 빈 배열을 반환 
- 3가지 인수를 가짐
    - element : 배열의 현재 요소
    - index : 배열의 현재 요소의 순번
    - arry : 호출한 배열
- thisArg : callback함수 실행 시, this로 사용되는 값
- 기존 배열을 변경하는 것이 아니고, 기존 배열에 있는 요소를 뽑아낸다고 생각하자!

<br>

#### **filter()를 사용하는 방법**

```javascript
arry.filter(function(e){
    return 조건;
})

// 화살표 함수 형태로 사용할 수 있다.
arry.filter((e)=>{
    return 조건;
})

// filter함수에서 실행되는 조건이 코드 한줄이면 생략된 형태로 사용할 수 있다.
arry.filter(e=> 조건);
```

```javascript
function filterCallback(e){
    return 조건;
}

arry.filter(filterCallback);
```

<br>

***[예제1-1] 글자수가 6글자 이상인 단어만 추출하기***

```javascript
let fruits = ["apple", "strawberry", "melon", "peach", "watermelon"];

function filterCallback(word){
    // 단어가 6글자 이상이면 ture이기 때문에 해당 글자를 반환하는 것이다!
    return word.length >= 6;
}

fruits.filter(filterCallback);
//  ['strawberry', 'watermelon'] 출력
```

<br>

***[예제1-2] 예제1-1을 if문으로 풀어서 쓴 경우***
```javascript
let fruits = ["apple", "strawberry", "melon", "peach", "watermelon"];
function filterCallback(word){
    if( word.length >= 6 ) {
        return true;
    }
}

fruits.filter(filterCallback);
//  ['strawberry', 'watermelon'] 출력
```

<br>

***[예제2] 결혼한 사람 찾기***
```javascript
var people = [
  {
    name: "김서현",
    age: 24,
    married: false
  },
  {
    name: "백승협",
    age: 19,
    married: false
  },
  {
    name: "강종식",
    age: 37,
    married: true
  },
  {
    name: "차미나",
    age: 29,
    married: true
  },
  {
    name: "오정균",
    age: 40,
    married: false
  },
];

function filterCallback(opt){
    return opt.married;
}

people.filter(filterCallback);

// 0: {name: '강종식', age: 37, married: true}
// 1: {name: '차미나', age: 29, married: true}
```

<br>

***[예제3] 배열의 중복된 값을 제거하고 값을 추출하기***

```javascript
const arr = ['0', 1, 2, '0', '0', 3];

arr.filter((item,index) => {
  return arr.indexOf(item) == index;
})

// ['0', 1, 2, 3]
```

<br>
<br>

### ` forEach(callback(currentvalue[, index [, array]])[, thisArg])`
- 주어진 함수(callback)을 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행
- callback : 각 요소를 시험할 함수. 다음 세 가지 매개변수를 받음
    - currentValue : 처리할 현재 요소
    - index (Optional) : 처리할 현재 요소의 인덱스
    - array (Optional) : forEach()를 호출한 배열
- thisArg (Optional) : callback을 실행할 때 this로 사용할 값

<br>

#### **forEach 작성방법**
```javascript
arr.forEach(function(element, index){
  console.log(element, index);
});

// 혹은 arrow(화살표) 함수 가능
arr.forEach((element,index) => {
  console.log(element, index)
});

// 인자값이 element 1개라면, 매개변수를 감싸고 있는 소괄호를 생략할 수 있다.
// 실행문이 한줄이면 { } 중괄호를 생략할 수 있다.
arr.forEach(element => console.log(element, index));
```

<br>

***[예제1-1] 0~10까지 있는 배열에서 홀수로만 이루어진 배열 만들기***

```javascript
let arr = [0,1,2,3,4,5,6,7,8,9,10];

// 풀이
// 홀수만 담을 빈 배열을 생성
let oddArr = [];

//arr의 요소값을 차례대로 돌면서
for(let i=0; i<arr.length; i++){
    // 해당 arr의 순번값이 2로 나눴을 때 나머지가 1이면 홀수임을 의미
    if(arr[i]%2 === 1){
        // 그 해당 값을 oddArr라는 빈배열에 추가한다.
        oddArr.push(arr[i]);
    }
}

console.log(oddArr);
// [1, 3, 5, 7, 9]
```

<br>

***[예제1-2] 예제1-1번을 이번에는 forEach를 이용해서 홀수배열만 만들기***

```javascript
let arr = [0,1,2,3,4,5,6,7,8,9,10];

// 풀이
// 홀수만 담을 빈 배열을 생성
let oddArr = [];

arr.forEach((el, index)=>{
    if(arr[index]%2 === 1){
        oddArr.push(arr[index]);
    }
});

console.log(oddArr);
// [1, 3, 5, 7, 9]
```

<br>

***[예제3] 배열의 중복된 값을 제거하고 값을 추출하기***

```javascript
const arr = ['0', 1, 2, '0', '0', 3];
let newArr = [];

arr.forEach((item) => {
  if(!newArr.includes(item)){
    newArr.push(item);
  }
})

console.log(newArr);
// ['0', 1, 2, 3]
```

<br />
<br />
<br />

## `reduce()`
