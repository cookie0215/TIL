# [TIL] CSS_선택자

### `tag` : **tag** 선택자
- 문서 내 지명된 모든 태그에 적용


```html
  <span>파랑색 글자</span>입니다.

  <div>안팍의 여백이 적용된 분홍 배경의 div 입니다.</div>
```
```css
span { color: blue; }

div {
  margin: 24px;
  padding: 48px;
  background-color: pink;
}
```

<br>
<br>

### `.class명` : **class** 선택자
- tag에 class 속성을 지정하여  class명 요소를 선택할 때 사용
- class명 중복 사용 가능

```html
  <h1 class="important">할 일 목록</h1>
  <ul>
    <li class="important">빨래</li>
    <li class="finished">30분 운동</li>
    <li>마트 장보기</li>
    <li class="finished">책 50페이지 이상 읽기</li>
    <li class="finished important">코딩 강좌 실습</li>
  </ul>
```
```css
.finished { color: skyblue; }
.important { text-decoration: underline; }

/* 특정 태그에 해당 클래스가 있을 때 */
li.important { background-color: yellow; }

/* 하나의 태그에 2개 이상의 클래스 */
.important.finished { font-style: italic; }
```

<br>
<br>

### `#id명` : **id** 선택자
- 문서 내 **유일한** 요소에 적용될 수 있는 id 속성에 따라 적용  
- * 하나 이상 사용 시 자바스크립트 등에서 오류 소지 (동일한 id명이 존재해선 안된다!)

```html
  <section id="intro">
    소개 섹션
  </section>
  <section id="board">
    게시판 섹션
  </section>
```
```css
section { padding: 32px; }

/* id명으로 css를 지정  */
#intro { background-color: yellowgreen; }
#board { background-color: pink; }
```
<br>
<br>


### `*` : **전체** 선택자
- 모든 태그에 적용
- html, body를 모두 포함시켜 적용할 수도 있고, 특정 요소의 모든 자손/자식으로 지정해 적용할 수도 있다. 

```html
  <section>
    <h1>제목</h1>
    <span>span 요소</span>
    <div>
      요소
      <div>더 안쪽 요소</div>
    </div>
    일반 텍스트
  </section>
```
```css
div { background-color: white; }

/* 전체 선택자를 이용해 css 지정 */
* {box-sizing: none}
section * {
  display: inline-block;
  background-color: orange;
  padding: 24px;
}
```

<br>
<br>

---

### **선택자 우선순위**

- `!important`  > `인라인방식의 style` > `#id 선택자` > `.class 선택자` > `태그 선택자` > `전체 선택자 *`
- 태그 선택자가 가장 낮은 순위, !important가 붙은 요소가 가장 높은 순위  
  (되도록 !important를 붙이지 않도록 한다!)
- 같은 우선순위라면 다음에(더 아랫줄) 오는 것이 덮어씀
→ 같은 class명에게 스타일 속성을 지정해줄 때 더 나중에 작성된 코드의 스타일로 덮어 써진다.

<br>

```html
<div class="text">무슨색일까요?</div>
```

```css
div.text { color: gold; }
div { color: green; }
.text {color: red; }

/*
해당 텍스트는 gold색상이 적용될 것이다.
div.text  > .text  > div  순으로 우선 순위가 결정되기 때문!

같은 우선순위에 속한 경우, 더 나중에 작성된 코드의 스타일이 적용되는데,
지금 예시같은 상황은 첫번째 div태그에 일치선택자형태로 class명이 붙어 있다.
그래서 두번째에 작성된 div태그가 더 나중에 작성된 코드더라도
첫번째 div.text요소의 스타일이 적용되는 것이다!!
 */
```

<br>
<br>

---

<br>

### `tag1tag2` : **일치** 선택자
- 선택자abc와 xyz를 동시에 만족하는 요소를 선택할 때 사용
- 작성할 때 붙여서 작성한다!
```html
<span class="orange">오렌지</span>
<span id="tomato">토마토</span>
```
```css
span.orange { color: orange;}
span#tomato { color: tomato;}
```

<br>
<br>

### `부모tag 자손tag` : **자손** 결합자 
- 내부의 모든 요소들을 선택
- 부모요소를 입력 후, 띄어쓰기하고 자손요소를 입력

```html
  <div class="outer">
    <div>
      <div>
        <div></div>
      </div>
    </div>
    <div>
      <div></div>
      <div></div>
    </div>
  </div>
```
```css
div {
  padding: 24px;
  border: 1px solid black;
  background-color: white;
}
.outer { background-color: green; }

/* 자손선택자에 css 지정*/
.outer div {
  background-color: yellow;
}
```

<br>
<br>

### `부모tag > 자식 tag` : **자식** 결합자 
- 바로 안 단계의 요소들을 선택
- 부모요소와 자식요소 사이에 `>`를 사용해서 표기

```css
  /* 빈 공백이 아닌 > 을 넣어주면 자식(1촌 자손)만 선택 */
  .outer > div {
    background-color: yellow;
  }
```

<br>
<br>

### `형제tag + 다음형제tag` : **인접 형제** (바로 다음 동생) 결합자 
- **형제tag1을 기준으로 바로 다음에 위치한 형제** 요소 하나만 선택
- `+` 기호를 사용해서 표시

```html
<ul>
  <li>수박</li>
  <li>딸기</li>
  <li class="orange">오렌지</div>
  <li>망고</li>
  <li>사과</li>
</ul>
```
```css

/* 
orange요소를 기준으로 
orange요소와 바로 다음 형제인 망고요소의 color가 빨간색으로 바뀐다.
*/
.orange + li { color: red; }
```

<br>
<br>

### `형제tag ~ 형제tag` : **일반형제** 선택자
- **형제 tag1을 기준으로  다음 형제 요소들 모두**를 선택
- `~ ` 기호를 사용해서 표시
```html

<ul>
  <li>수박</li>
  <li>딸기</li>
  <li class="orange">오렌지</li>
  <li>망고</li>
  <li>사과</li>
</ul>
```
```css

/*
orange 클래스명을 기준으로 다음 형제 요소 모두를 선택한다!
그래서 "망고" 와 "사과"만 글자색이 빨간색으로 바뀐다!
*/

.orange li {color: "red";}
```

<br>
<br>

---

<br>
<br>

## 속성 선택자

<br>

### `[속성]`

- 태그의 속성만 가지고 스타일을 적용할 수 있다.

```html
<label for="ip-id">아이디</label>
<input id="ip-id" type="text"/>
```

```css
input[type]{
	background: gold;
}
```

```html
<a href = "https://www.google.co.kr" target="_blank">구글</a>
```
```css
a[href]{
  color: violet;
}
```

- data속성도 속성 선택자를 통해서 스타일을 적용할 수 있다.

```html
<span data-fruit-name="apple">사과</span>
```

```css
span[data-fruit-name] {
	color: "red"
}
```
<br>
<br>

### `tag[속성=값]`
- 태그의 속성과 그 값에 따라 스타일을 적용할 수 있다.

```html
  <label for="ip-id">아이디</label>
  <input id="ip-id" type="text"/>
  <br>
  <label for="ip-pw">비밀번호</label>
  <input id="ip-pw" type="password"/>
  <br>
  <label for="ip-nm">이름</label>
  <input id="ip-nm" type="text"/>
```
```css
label {
  display: inline-block;
  width: 80px;
}

/* 태그의 속성에 css를 지정  */
input[type=text] { background-color: skyblue; }
label[for=ip-id] { color: blue; }
```
