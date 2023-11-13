# [TIL] JS_문자열 관련 속성들

### `length`
- 문자열 길이 구할 때 사용 (글자수를 출력)

```javascript
var myString = "자바스크립트";

console.log(myString.length);  // 6
console.log(myString[1])    // 바
```

<br>

> 🖐잠깐!
>
> 문자열(string)도 **유사 배열 객체**이기 때문에     
> length 프로퍼티를 사용할 수 있고,  
> 또한 for문으로 순회할 수도 있다!  
> 단, string은 원시 값이기도 해서 `myString[1] = '헐'` 이렇게 일부 문자를 변경해도 반영되지 않는다.
> <br />
> <br />
> ***유사배열 객체***  
> *: 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고,*    
> *length 프로퍼티를 갖는 객체를 말한다.*


<br>
<br>

### `slice(strat [, end])`
- 글자 수를 기준으로 문자열을 자를 때 사용
- start : 추출 시작점
    - 값이 양수일 때 : 맨 앞에서부터 문자를 입력한 갯수만큼 잘라내고 나머지 글자를 추출
    - 값이 음수일 때 : 마지막 요소부터 시작해 입력한 갯수만큼 추출
- end : 추출 종료할 기준 (입력 여부는 선택)
    - 값이 양수일 때 : 맨앞에서부터 시작해 n번째 위치한 문자까지 추출할 것을 의미
    - 값이 음수일 때 : 마지막요소부터 시작해 n번째의 문자부터 추출할 것을 의미
    - 값이 해당 문자열길이보다 같거나 이상인 경우 : 문자열을 끝까지 추출
    > ex) slice(2, -4)

```javascript
var myString = "자바스크립트";

myString.slice(3)   // "크립트" 출력
myString.slice(-2)   // "립트" 출력
myString.slice(1, -3)   // "바스" 출력
myString.slice(4, 6)   // "립트" 출력
myString.slice(4, -1)   // "립트" 출력

myString.slice(2, -4)   
// "" 출력 : 3번째 글자 "스" 부터 추출 해야 하는데, end값이 -4로 마지막위치부터 시작해 4번째에 위치한 글자 "바"부터 추출하도록 만듬 -> 2개의 index번호가 추출할 글자가 일치한 것이 없어서 빈 문자열이 추출된다.
```

<br>
<br>

### `replace("바꾸고싶은문자열", "변경될 문자열");`
- 문자열의 일부를 치환
- 첫번째 값은 기존문자열에서 바꾸고 싶은 문자열을 입력, 두번째 값은 치환할 문자열을 입력
- 두번째 값을 빈문자열로 입력하면 해당 문자열이 지워진 상태로 출력된다.
- 문자열안에 동일한 글자가 여러개 있어도 무조건 첫번째 글자만 변경된다!

```javascript
var str = "어서오세요.";
str = str.replace("오","가");

console.log(str);   // "어서가세요" 출력

var str2 = "hello world!";
str2.replace("rl", "");    // "hello wod!" 출력 : rl부분을 지운 채 출력됨
str2.replace("ll", " ");  // "h o world!" 출력 : ll부분이 공백으로 변환됨
str2.replace("l", "a");  // "healo world!" 출력 : 문자열에 동일한 글자가 여러개 있을 때, 무조건 1번째 글자만 변경된다!!
```

*사실 문자열을 치환,변환하고 싶을 때 정규표현식을 이용한다.*

<br>
<br>

### `indexOf()`
- 해당 문자가 몇번째에 위치했는지 알려준다. (공백도 index에 포함됨)
- 해당 문자가 문자열에 들어가 있는지 없는지 확인할 수 있다.

```javascript
var str1 = "한겨울에 밀짚모자 쓴 꼬마 눈사람";

console.log(str1.indexOf("한"));    // 0 출력 : 0번째에 위치해 있음을 알려준다. 
console.log(str1.indexOf("꼬마"));  // 12 출력 : 꼬마라는 단어가 12번째에 위치해 있음을 알려줌 (공백도 갯수를 세어줌)
console.log(str1.indexOf(" "));     // 4 출력 : 제일 첫번째에 만나는 공백의 위치를 출력한다.
console.log(str1.indexOf("산타"));  // -1 출력 : 해당 단어가 존재하지 않기 때문
```

<br>

***[응용 연습] '서울'이라는 모든 단어를 '부산'으로 변경해보기***
```javascript
var str = "저는 서울에 살고 있는 서울 시민입니다.";

// str에 "서울"이라는 단어가 있는 동안 (해당 단어가 있는지 없는지 확인)
while(str.indexOf("서울") !== -1){
    // str에 있는 서울이라는 단어를 부산으로 치환
    str = str.replace("서울","부산");
    
    console.log(str);
}

```
> while은 반복문이기 때문에 해당 문자열에 해당 단어가 존재하는 수만큼 실행된다.  
> 그래서 해당 문자열에 서울이라는 단어를 처음 만나면  
> 첫번째 실행문에서 "저는 부산에 살고 있는 서울 시민입니다." 출력  
> 그 다음 서울이라는 단어가 또 있는지 해당 문자열에서 찾은 뒤,  
> 두번째 실행문에서 "저는 부산에 살고 있는 부산 시민입니다." 가 출력 된다.  
> 또 한번 더 서울이라는 단어가 있는지 찾고, 이제 서울이라는 단어가 해당 문자열에 없다면 실행문이 종료 되는 것이다!  

<br>
<br>

### `split([separator] , [limit])`
- 특정 문자를 기준으로 문자열을 자를때 사용되며 배열에 담아서 반환한다!
- separator : 문자열을 자를 때 기준이 되는 것
    - 필수 입력 값은 아님
    - 값이 아예 입력되지 않은 경우 : 문자열 전체를 배열에 담아 리턴
    - 값이 `""` 이렇게 입력된 경우 : 해당 문자열을 한글자씩 모두 쪼개서 반환
    - 값이 `" "` 이렇게 공백을 넣은 경우 : 문자열에 공백이 있는 기준으로 잘라서 반환
- limit : separator로 자른 문자를 n개 만큼 반환하는 것
    - 필수 입력 값은 아님

<br>

```javascript
const str = "apple banana , orange";

str.split();      // ['apple banana , orange']
str.split("");    // ['a', 'p', 'p', 'l', 'e', ' ', 'b', 'a', 'n', 'a', 'n', 'a', ' ', ',', ' ', 'o', 'r', 'a', 'n', 'g', 'e']
str.split(" ");   // ['apple', 'banana', ',', 'orange']
str.split(" ", 1); // ['apple'] 

str.split(" ", 2)[0];
// 'apple' 출력 : 공백을 기준으로 2번째까지 반환한 뒤, 그 반환된 배열 중 첫번째 요소만 출력

str.split(" ", 2)[2];
// undefined 출력 : 공백을 기준으로 2번째까지 반환한 뒤, 3번째 요소를 반환해야하는데 존재하지 않기 때문에 undefined가 출력된다
```

<br>
<br>

### `trim()`
- 문자열의 맨 앞과 맨 뒷부분의 공백을 제거  
- 문자열 내부에 있는 공백은 제거가 불가능!  
- 아이디나 패스워드 입력 시, 실수로 스페이스를 눌러 공백을 만드는 경우에 trim()을 활용해 공백을 없앨 수 있다!  

```javascript
var str = " Merry Christmas ~! ";
str.trim();   //'Merry Christmas ~!'  출력 : 중간의 공백은 제거되지 않음을 볼 수 있다
```
<br>
<br>

# `includes()`
- 해당 문자열에 찾으려는 문자가 포함되어 있는지 아닌지의 여부를 확인  
  (공백의 포함 여부도 확인 가능)
- true , false로 값을 반환
- 대소문자를 구분한다.

<br>

```javascript
const str = 'Hello World~! 안녕하세요!';

console.log(str.includes('안녕'));     // true
console.log(str.includes('hello'));     // false
console.log(str.includes(' '));     // true
console.log(str.includes(''));     // true
console.log(str.includes('.'));     // false

```

<br>
<br>