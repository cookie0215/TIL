# [TIL] CSS_선택자

### `tag` **tag** 선택자
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

### `.class명` **class** 선택자
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

### `#id명` **id** 선택자
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

### `tag[속성=값]` **attr**(속성) 선택자
- 태그의 속성과 그 값에 따라 적용

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

<br>
<br>

---

### **일치** 선택자
- 선택자abc와 xyz를 동시에 만족하는 요소를 선택할 때 사용
- 작성할 때 붙여서 작성한다!
```html
<span class="orange">오렌지</span>
```
```css
span.orange { color: orange;}
```

<br>
<br>

### **자손** 결합자 
- 내부의 모든 요소들을 선택
- 부모요소를 입력 후, 띄어쓰기하고 자손요소를 입력
- 부모tag 자손tag {css스타일 속성}

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

### **자식** 결합자 
- 바로 안 단계의 요소들을 선택
- 부모요소와 자식요소 사이에 `>`를 사용해서 표기
- `부모tag > 자식tag {css스타일 속성}`

```css
  /* 빈 공백이 아닌 > 을 넣어주면 자식(1촌 자손)만 선택 */
  .outer > div {
    background-color: yellow;
  }
```

<br>

### **인접 형제** (바로 다음 동생) 결합자 
- 바로 안 단계의 요소들을 선택
- `+` 기호를 사용해서 표시
- `형제1tag + 형제2tag {css스타일 속성}`

```html
  <div>첫줄</div>
  <div>둘째줄</div>
  <div class="selected">선택된 줄</div>
  <div>넷째줄</div>
  <div>다섯째 줄</div>
```
```css
div {
  padding: 12px 24px;
  border-top: 1px solid black;
}
.selected {
  border-top: 0;
  color: white;
  background-color: dodgerblue;
}

/* 두 형제요소에 css 지정 */
.selected + div { border-top: 0; }
```

<br>

### **전체** 선택자
- 모든 태그에 적용
- html, body를 모두 포함시켜 적용할 수도 있고, 특정 요소의 모든 자손/자식으로 지정해 적용할 수도 있다. 
- `*`로 표시 

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

## psudo(가상) 클래스

### **부정** 가상 클래스
- `tag:not(a선택자){css스타일 속성}`
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
- 동일한 tag명이 여러개 일 때, 순번대로 스타일을 지정할 수 있다.

```html
  <ul>
    <li>첫번째 글</li>
    <li>두번째 글</li>
    <li>세번째 글</li>
    <li>네번째 글</li>
    <li>다섯번째 글</li>
    <li>여섯번째 글</li>
    <li>일곱번째 글</li>
    <li>여덟번째 글</li>
  </ul>
```
```css
ul { padding: 0; }
ul li {
  list-style: none;
  padding: 8px 16px;
  border-top: 1px solid lightgray;
}

/* 아래부터 */
ul li:first-child { border-top: 2px solid black; }
ul li:last-child { border-bottom: 2px solid black; }
ul li:nth-child(3) { color: purple; }
ul li:nth-child(even) { background-color: #eee; }
ul li:nth-child(3n+1) { text-decoration: underline; }
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

### **마우스오버** 가상 클래스
> `:hover`를 붙인다.

```html
  <button class="blue-button">
    클릭
  </button>

  <br><br>
  
  <div>
    파일
    <ul>
      <li>저장</li>
      <li>열기</li>
      <li>닫기</li>
    </ul>
  </div>
```
```css
.blue-button {
  font-size: 1em;
  padding: 16px 24px;
  color: white;
  background-color: dodgerblue;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
}
.blue-button:hover {
  background-color: darkblue;
}

div {
  position: relative; display: inline-block;
  color: white; background-color: tomato;
  height: 56px; line-height: 56px; padding: 0 24px;
  cursor: pointer;
}
div ul {
  display: none;
  position: absolute;
  width: 100px; left: 12px; top: 56px; margin: 0; padding: 0;
}

/* div에 hover를 적용*/
div:hover ul { display: block; }

div ul li {
  background-color: #444;
  height: 44px; line-height: 44px; text-align: center;
}

/* li에 hover를 적용*/
div ul li:hover { background-color: #222; }
```

<br>
<br>

***

<br>
<br>

## 선택자 우선순위

- `인라인 스타일` > `id 선택자` > `class 선택자` > `태그 선택자`
- 구체적일수록 높은 순위
- 같은 우선순위라면 다음에(더 아랫줄) 오는 것이 덮어씀

