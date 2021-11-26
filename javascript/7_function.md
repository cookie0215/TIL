# [TIL] JS_함수

### 함수 선언

```javascript
function 함수명(매개변수){
    실행문; 
}
```

### 함수 호출

```javascript
// 위에 작성한 함수를 호출하는 방법
함수명();
```

### 값을 반환하는 함수

```javascript
function getSum(num1, num2){
    return num1 + num2;
}

// 함수를 호출(실행)시키면 매개변수자리에 10과 20을 받아서 getSum함수에서 연산한 뒤,
// 함수가 호출되고 있는 자리가 return으로 값으로 대체면서 console창에 연산된 값이 출력되는 것이다.
console.log(getSum(10,20));  // 30 출력
```