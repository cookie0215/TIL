# [TIL] CSS_pseudo 가상 선택자와 가상요소 선택자

## 가상 선택자 (pseudo-class)

### `:hover`

- hover는 어떠한 요소에 어떠한 행동을 했을 때 동작하는 것  
→ 요소에 마우스를 올리면 지정한 스타일 효과에 맞게 변하고 마우스를 떼면 원래 상태로 돌아간다.

```html
<div class="box"></div>
```

```css
.box {
	width: 200px;
	height: 200px;
	background-color: orange;
}

/*마우스를 요소에 갖다 댔을 때 동작*/
.box:hover {
	width: 400px;
	backgruond-color: blue;
}
```
<br>
<br>

### `:active`
- 해당 요소에 마우스를 클릭하고 있는 동안에만 동작하는 것
```html
<div class="box"></div>
```

```css
.box {
	width: 200px;
	height: 200px;
	background-color: orange;
}

/*마우스로 해당 요소를 꾹 누른 상태에서만 동작*/
.box:active {
	width: 400px;
	backgruond-color: blue;
}
```
<br>
<br>

### `:focus`
- 해당 요소가 포커스가 되었을 때 동작하는 것
- 실제로 포커스가 가능한 요소에서만 동작함!!!  
  → 즉, div 태그에서 :focus 가상 요소를 사용할 수 없다. 
  하지만 div태그에 tabindex="-1" 속성을 넣어주면 focus가 가능하다.  
- focus는 하나의 페이지안에서 한 개의 요소만 포커스가 가능하다!!

<br>

> focus가 될 수 있는 요소는 HTML대화형 콘텐츠에 해당한다.  
> 대표적으로 `<input>` ,`<a>` , `<button>` , `<label>` , `<select>`....등  
> html 대화형 콘텐츠가 아니더라고 tabindex속성을 사용한 요소도 focus가 될 수 있다.  

<br>

```html
<input type="text" />
<div class="box" tabindex="-1"></div>
```
```css
/*input 요소에 커서가 깜빡이는 경우가 포커스된 상태이다!*/
input:focus {
  background : yellow;
}

/*box는 원래 포커스가 불가능한 요소인데,  
tabindex="-1"을 지정함으로써 포커스 효과가 가능해졌다. */
div:focus {
  width: 400px;
	backgruond-color: blue;
}
```


### `tag:not(a선택자)` **부정** 가상 클래스
- 선택자를 제외한 tag명에게 스타일을 지정한다는 의미

```html
  <h1 class="underline">부정 가상 클래스 사용예</h1>
  <ul>
    <li>특성 없음</li>
    <li class="blue">파랑글씨</li>
    <li class="blue underline">파랑글씨에 및줄</li>
    <li class="underline">파랑글씨는 아닌데 및줄</li>
  </ul>
```
```css
.blue { color: blue; }
.underline { text-decoration: underline; }

/* 아래부터 */
.underline:not(.blue) { color: red; }
.underline:not(.blue):not(li) { color: inherit; }
```

<br>

### **순서** 관련 가상 클래스
- `tag:nth-child(n) {css스타일 속성}`
- `tag:nth-of-type(n) {css스타일 속성}`
- 해당 요소가 형제 요소들 중 'n번째'에 위치한 요소를 의미

<br>

***[예시] `tag:nth-child(n)`***

```html
<div class="fruits">
	<span>딸기</span>
	<span>수박</span>
	<div>오렌지</div>
	<p>망고</p>
	<h2>사과</h2>
<div>
```

```css
/*
첫번째 요소만 선택하고 싶을 때 :ntyh-child(1) 또는 :first-child로 작성
-> 딸기 요소만 글자색이 빨갛게 변한다.
*/
.fruits *:ntyh-child(1){
	color: red;
}


/*
홀수번째 요소만 선택하고 싶을 때 사용  
:nth-child(2n-1) 또는 :nth-child(odd) 라고 입력
-> 딸기, 오렌지, 사과 요소만 글자색이 파란색으로 바뀐다.

**짝수번째는 :nth-child(2n) 또는 :nth-child(even) 으로 입력
*/
.fruits *:nth-child(2n-1){
	color: blue;
}

/*
첫번째,두번째 요소를 제외하고 세번째 요소부터 선택하고 싶을 때 n+3로 작성
-> 오렌지, 망고, 사과 요소만 글자색이 변경됨
*/
.fruits *:nth-child(n+3){
	color: green;
}

/*
첫번째,두번째,세번째 요소까지만 선택하고 싶을 때 -n+3로 작성
-> 딸기, 수박, 오렌지 요소만 글자색이 변경됨
*/
.fruits *:nth-child(n+3){
	color: gold;
}
```



<br>

#### `:nth-child(n)` 과 `:nth-of-type(n)`의 차이
> `:nth-child(n)`  : 부모요소 기준으로 자식의 순번을 찾음
> `:nth-of-type(n)` : 부모요소안에 있는 해당  tag중에서 n번째에 해당하는 순번을 찾음

```html
<div>
  <h1>1번</h1>
  <p>2번</p>
  <p>3번</p>
  <p>4번</p>
</div>
```
```css
p:nth-child(2) {color: blue;}     // 2번텍스트가 파란색글씨로 변경
p:nth-of-type(2) {color: red;}    // 3번텍스트가 빨간색으로 변경
```

<br>
<br>
<br>

## 가상 요소 선택자 (pseudo-elements)

*콜론 `:` 기호를 1개만 사용해도 동작 되지만, 웹 표준상 콜론을 `::` 이렇게 2개 쓰는 것을 원칙으로 한다.*

<br>

### `::before`

- 해당 요소의 내부 앞에 content(내용)을 삽입
- inline 요소이다!
- 반드시 content: ""; css속성을 작성해 주어야 한다!

→ 요소 앞쪽에 텍스트 내용을 넣고 싶다면 따옴표 안에 내용을 입력해주면 되지만, 만약 텍스트 말고 도형 형태를 넣고 싶다면 content에 값을 비워둔 채 작성한다.


<br>

### `::after`

- 해당 요소의 내부 뒤에 content(내용)을 삽입
- inline 요소이다!
- 반드시 content: ""; css속성을 작성해 주어야 한다! (before와 마찬가지!)


***[예시] box요소 앞 뒤로 텍스트 추가하기***

```html
<div class="box">박스</div>
```
```css
.box {
	width:200px;
	height: 200px;
	background: orange; 
}

.box::before {
	content: "before글자";
}
.box::after {
	content: "after글자";
}
```

<br>

***[예시2] box요소 앞 뒤로 동그라미 도형 추가하기***

```html
<div class="box">박스</div>
```
```css
.box {
	width:200px;
	height: 200px;
	background: yellowgreen; 
}

/*
before와 after요소는 inline요소이기 때문에 텍스트외의 요소를 넣고 싶다면  
block요소로 바꿔줘야 한다!
*/

.box::before {
	content: "";
  display: "block";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: red;
}
.box::after {
	content: "";
  display: "block";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: blue;
}
```
