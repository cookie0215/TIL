# [TIL] 연산자
하나 이상의 표현식을 대상으로 산술, 할당 등 연산을 수향해 하나의 값을 만든다.

<br>

## 할당 연산자 (Assignment Operators)
할당 연산자는 값을 그 우변 피연산자의 값에 따라 좌변 피연산자에 할당

```javascript
const apple = 5;
apple += 2;
// apple = apple + 2;과 같은 의미이다.   
```

### 할당연산자 종류 
|할당연산자 | 설명 | 예시
| :--: | :-- | :--: |
`A = B` | 왼쪽의 피연산자에 오른쪽의 피연산자를 대입함 |  A = B
`A += B` | 왼쪽의 피연산자에 오른쪽의 피연산자를 더한 후, 그 결괏값을 왼쪽의 피연산자에 대입함 | A = A + B
`A -= B` | 왼쪽의 피연산자에서 오른쪽의 피연산자를 뺀 후, 그 결괏값을 왼쪽의 피연산자에 대입함 | A = A - B
`A *= B` | 왼쪽의 피연산자에 오른쪽의 피연산자를 곱한 후, 그 결괏값을 왼쪽의 피연산자에 대입함 | A = A * B
`A /= B` | 왼쪽의 피연산자를 오른쪽의 피연산자로 나눈 후, 그 결괏값을 왼쪽의 피연산자에 대입함 | A = A / B
`A %= B` | 왼쪽의 피연산자를 오른쪽의 피연산자로 나눈 후, 그 나머지를 왼쪽의 피연산자에 대입함 | A = A % B



<br>

## 비교 연산자 (Comparison Operators)
: 비교 연산자는 피연산자 사이의 상대적인 크기를 판단하는 연산자

<br>

비교 연산자 | 설명
| :--: | :-- |
`==` | 왼쪽의 피연산자와 오른쪽의 피연산자가 같으면 참을 반환함. (**데이터 타입이 달라도 형태만 같으면 True**)
`!=` | 왼쪽의 피연산자와 오른쪽의 피연산자가 같지 않으면 참을 반환함.
`>` | 왼쪽의 피연산자가 오른쪽의 피연산자보다 크면 참을 반환함.
`>=` | 왼쪽의 피연산자가 오른쪽의 피연산자보다 크거나 같으면 참을 반환함.
`<` | 왼쪽의 피연산자가 오른쪽의 피연산자보다 작으면 참을 반환함.
`<=` | 왼쪽의 피연산자가 오른쪽의 피연산자보다 작거나 같으면 참을 반환함.
`===` | 왼쪽의 피연산자와 오른쪽의 피연산자가 형태, **데이터 타입까지 모두 같으면 참을 반환**

<br>

```javascript
const a = "3";
const b = 3;

console.log(a == b);     // true
console.log(a === b);     // false
```


💗 각 true 형태를 비교했을 때, console.log 값들이 출력되는 것을 확인하기

```javascript
const stringIsTrue = 'true';
const booleanIsTrue = true;
const numberIsTrue = 1;

console.log(stringIsTrue === booleanIsTrue)    // false
console.log(stringIsTrue == booleanIsTrue)     // false
console.log(numberIsTrue == booleanIsTrue)     // true
console.log(numberIsTrue === booleanIsTrue)    // false
```


#### 1. `console.log(stringIsTrue === booleanIsTrue)` 는 `false` 값을 반환한다. <br>
: stringIsTrue 와 booleanIsTrue 는 보기에 형태가 같더라도 데이터타입이 다르기 때문에 당연히 false를 반환한다고 생각된다. <br>
(정확한 이유는 아래 확인하기)

 <br>

#### 2. `console.log(stringIsTrue == booleanIsTrue)` 는 `false` 값을 반환한다. <br>
: stringIsTrue 와 booleanIsTrue 는 데이터타입이 서로 달라도 형태가 같으니까 ture 값을 반환할 거라고 예상되지만, false값을 반환한다. <br>
그 이유는 자바스크립트 자체적으로 데이터타입 변환(형변환)이 일어나기 떄문이다. <br>
( stringIsTrue 와 booleanIsTrue 모두 Number 타입으로 형변환 발생)

  여기서 stringIsTrue는 Number 타입으로 변하면서 NaN로 바뀌었고, <br>
  booleanIsTrue는서 Number 타입으로 변하면 1 로 바뀌어서 서로 형태가 달라졌기 떄문에 false값을 출력하는 것이다. <br>

  또한 1번 console.log 에서도 false를 반환하는 명확한 이유는 눈으로 보기에 형태가 같고,  <br> 데이터타입만 달라서 false를 반환하는 것이 아니라 number타입으로 형변환이 발생되면서 stringIsTrue는 NaN로, booleanIsTrue는 1로 서로 아예 다르기 때문에 false를 반환하는 것이다!

 <br>

#### 3. `console.log(numberIsTrue == booleanIsTrue)`는 `true`값을 반환한다.
numberIsTrue는 원래 number타입이기 때문에 number로 형변환이 발생되도 그대로 1 을 반환하고,  <br>
booleanIsTrue는 number로 형변환이 발생되면서 1로 바뀌어 서로 비교하면 1로 같기 때문에 true를 반환하는 것이다.

<br>
<br>

## 산술 연산자 (Arithmetic Operators)
: 산술 연산자는 모두 두 개의 피연산자를 가지는 이항 연산자이며, 피연산자들의 결합 방향은 왼쪽에서 오른쪽이다.


산술 연산자 | 설명
| :--: | :-- |
`+` | 왼쪽의 피연산자에 오른쪽의 피연산자를 더함.
`-` | 왼쪽의 피연산자에서 오른쪽의 피연산자를 뺌.
`*` | 왼쪽의 피연산자에 오른쪽의 피연산자를 곱함.
`/` | 왼쪽의 피연산자를 오른쪽의 피연산자로 나눔.
`%`| 왼쪽의 피연산자를 오른쪽의 피연산자로 나눈 후, 그 나머지를 반환함.

<br>
<br>

## 논리 연산자 (Logical Operators)
: 논리 연산자는 주어진 논리식을 판단하여, 참(true)과 거짓(false)을 결정하는 연산자
연산자

논리연산자 | 설명
| :--: | :-- |
| `&&` | 논리식이 모두 참이면 참을 반환함 (논리 AND 연산)
| `ll` | 논리식 중에서 하나라도 참이면 참을 반환함 (논리 OR 연산)
| `!` | 논리식의 결과가 참이면 거짓을, 거짓이면 참을 반환함. (논리 NOT 연산)

<br>


### && (AND연산자)

💙 아래의 결과 값들 console 창에 출력해보기

```javascript
const a1 = true && true;        // true
const a2 = true && false;       // false
const a3 = false && 3 == 4;     // false
const a4 = "cat" && "dog";      // dog
const a5 = "" && "dog";         // false
const a6 = "dog" && false;     // false
```

✅ **const a4 가 dog를 반환하는 이유가 뭘까?** <br>
: AND 연산자(&&) 는 왼쪽피연산자가 Truthy한 값이면 true로 인식하고, <br>
오른쪽피연산자가 boolean값이 아닌 string, number타입의 값이면 오른쪽 피연산자는 자신이 갖고 있는 해당 타입을 그대로 유지한다.<br>
그래서 "cat"은 truthy한 값이기 때문에 true이고, "dog"는 string타입 그대로 유지되어 <br>
"cat" && "dog"; → true && "dog" 형태로 연산한 뒤, "dog" 라는 값을 반환하는 것이다. 

<br>

✅ **반면 const a5가 false를 반환하는 이유는?!** <br>
: AND 연산자(&&) 는 왼쪽피연산자 "" 는 빈문자열로 Falsy한 값을 나타내기 때문에 오른쪽 피연산자가 어떠한 값이 오더라도 무조건 false를 반환한다!

<br>


✅ const a6처럼 왼쪽에는 "dog"값이, 오른쪽에는 false값이 들어있다면 true && false를 비교하기 때문에 당연히 false값을 반환하는 것이다. <br>

<br>
<br>

### || (OR연산자)
: OR연산자는 둘 중 하나라도 참이면 ture이기 때문에 왼쪽, 오른쪽 피연산자 중 하나의 값이 Truthy한 값을 가지면 true를 반환하는데, <br>
이때 Truthy한 값이 boolean타입으로 형변환되지 않고 해당 타입 그대로 인식되어 형태 그대로를 반환하게 된다!!! 

<br>

```javascript
const o1 = true || true;       // true
const o2 = false || true;      // true
const o3 = false || 3 == 4;    // false
const o4 = "cat" || "dog";     // cat
const o5 = false || "cat";     // cat
const o6 = "cat" || "";        // cat
const o7 = "cat" || false;     // cat
```

✅ **const o4 가 cat을 반환하는 이유** <br>
: AND 연산자는 왼쪽이 truthy한 값이면 오른쪽에 있는 값을 그대로 연산해서 반환한다.
반면, OR연산자는 오른쪽이 truthy한 값이면 왼쪽에 있는 값을 그대로 연산해서 반환하기 때문에 cat 을 출력하는 것이다!

<br>

✅ **const o5 가 cat을 반환하는 이유** <br>
: 왼쪽이 false라 하더라도 OR연산자는 두개의 값 중 하나라도 Truthy한 값이 있다면 true를 반환한다. <br>
이때, 오른쪽에 있는 "cat"을 boolean타입으로 형변환 하지 않고, string타입으로 그대로 반환되어 cat을 출력하게 된다.

`즉, OR연산자는 왼쪽/오른쪽 둘 중 하나라도 truthy한 값이 있다면 true를 반환하는데,` <br> 
`이때 데이터형변환이 발생되지 않고 기존 형태 그대로 반환된다.` <br>
`또한 왼쪽/오른쪽 모두 truthy한 값일 때는 왼쪽의 값을 출력한다!!`

<br>
<br>

## 삼항 연산자 (Conditonal Operators)
- 삼항 연산자는 유일하게 피연산자를 세 개나 가지는 조건 연산자
- 물음표(?) 앞의 표현식에 따라 결괏값이 참이면 반환값1을 반환하고, 결괏값이 거짓이면 반환값2를 반환

```markdown
표현식 ? 반환값1 : 반환값2
```

💛 18살이라는 나이를 가진 사람이 성인인지 아닌지를 확인하고 싶을 때 삼항연산자를 사용해서 코드 작성하기

```javascript
const age = 18;
const adultCheck = age >= 18 ? '성인' : '미성년자'
```

위 삼항 연산자는 아래의 if조건문과 같다!

```javascript
if(age >= 18){
   return '성인';
} else {
   return '미성년자';
}
```


<br>
<br>
