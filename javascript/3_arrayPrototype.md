# [TIL] JS_배열 관련 속성들

### length
- 배열의 전체길이를 구할 때 사용

> arry[0] : 배열의 첫번째 요소를 구할 때
> arry.length - 1
> : 배열의 전체 길이를 모르는 상태에서 마지막 번째 요소를 구하고 싶을 때 배열전체(arry.length)에서 - 1을 해줘야 한다!
>   이유) 배열의 순번은 0번부터 시작하기 때문! 

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

### indexof()
- 특정 값이 배열의 몇번째 요소인지 반환
- 해당 배열안에 내가 찾는 요소가 없다면 -1을 반환

<br>

```javascript
var fruitArr = ["apple", "banana", "orange"];

console.log(fruitArr.indexof('orange'));   // 2 출력 (orange 요소가 3번째에 위치해 있음을 알 수 있다.)
console.log(fruitArr.indexof('mango'));    // -1 출력 (mango 요소가 현재 배열안에 없음을 알 수 있다.)
```

<br>
<br>

### 배열 내 요소 변경하는 방법
- 원래 있는 배열의 순번에 다른 값을 할당해주면 된다.

<br>

```javascript
var classMate = ["Kim", "Lee", "Park"];
classMate[1] = "Choi";
console.log(classMate[1]);     // Choi 출력
```

<br>
<br>

### push()
-  배열에 새로운 요소를 삽입 (배열의 마지막에 요소가 삽입된다.)

<br>

```javascript
var classMate = ["Kim", "Lee", "Park"];
classMate.push("Nam");

console.log(classMate);   // ['Kim', 'Lee', 'Park', 'Nam'] 출력
```

<br>
<br>

### concat()
- 배열안에 있는 요소에 다른 요소들을 이어붙여서 반환
- 단, concat을 사용한 배열을 출력하려면, 해당 배열을 다시 변수에 담아서 출력해야 한다.
- 문자열을 이어붙일 수도 있다.

<br>

***[예제1] concat을 이용해서 배열을 이어붙였지만, 변수에 담지 않고 출력한 상태***

```javascript
var num = [2,4,6];
num.concat(1,3);

console.log(num);
// [2, 4, 6] 만 출력된 것을 볼 수 있다.
```

<br>

***[예제2] concat을 이용해서 배열을 이어붙인 후, 변수에 담아 출력한 상태***

```javascript
var num = [2,4,6];
num = num.concat(1,3);

console.log(num);
// [2, 4, 6, 1, 3] 이 출력된 것을 볼 수 있다.
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


### splice(start, delete)
- start번째(위치)부터 delete갯수의 요소를 제거하고 싶을 때 사용

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

