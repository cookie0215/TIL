 # [TIL] JS_숫자 관련 속성들

### `Number()`
- 문자열을 숫자타입으로 변경  

```javascript
var numStr = "100";
var numCast = Number(numStr);

console.log(typeof numCast);    // number타입으로 변경된 것을 볼 수 있다.
```

<br>

- 숫자타입으로 변환 시, 변경하려는 문자열에 숫자가 아닌 것이 있다면 NaN를 반환  

```javascript
var numStr = Number("123ABC");

console.log(`${numStr} , ${typeof numStr}`);
// NaN , number
// 데이터타입은 number로 변경되었지만 값은 NaN가 출력된다.
```
<br>
<br>

## Math 내장객체를 이용한 기능들

<br>

### `Math.abs()`
- 절대값을 구할 때 사용

```javascript
console.log(Math.abs(-5));    // 5 출력

function getDiff(num1, num2){
    return Math.abs(num1 - num2);
}

getDiff(1, 10);      // 9 출력 : 1 - 10 = -9 이지만 Math.abs()로 인해 절대값인 9가 나오는 것이다
```

<br>
<br>

### `Math.floor()` : 내림  |  `Math.ceil()` : 올림  |  `Math.round()`  : 반올림

```javascript
console.log(Math.ceil(2.4));     // 3
console.log(Math.floor(2.4));    // 2
console.log(Math.round(2.4));    // 2

console.log(Math.ceil(2.7));    // 3
console.log(Math.floor(2.7));   // 2
console.log(Math.round(2.7));   // 3
```

<br>
<br>

### `Math.pow()`
- 제곱 구할때 사용

```javascript
console.log(Math.pow(2, 3));     // 8  출력 :  2의 3승(세제곱)을 의미 
```

<br>
<br>

