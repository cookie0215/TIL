# [TIL] CSS_Grid Layout

### grid 레이아웃
- 페이지를 구획으로 나누는 다양한 방법
- 부모요소를 Grid Container , 자식요소를 Grid Item이라고 한다.

![1분코딩님 블로그 참고](https://studiomeal.com/wp-content/uploads/2020/01/03-2.jpg)


### `display: grid`
grid스타일을 사용하려면 반드시 부모 요소에 작성한다

<br>
<br>

### `grid-template-columns`
- 열의 갯수와 크기 지정
- 값의 갯수에 따라 column의 갯수가 정해진다

<br>

> 절대값으로지정
```css
.wrapper {
  grid-template-columns: 100px 200px 300px;
}
```
<br>

> 비율 분할(fractions)
```css
.wrapper {
  grid-template-columns: 1fr 2fr 3fr 4fr;
}
```
<br>

> 혼합 사용
```css
.wrapper {
  grid-template-columns: 200px 1fr 3fr;
}
```
<br>

> 반복 지정
```css
.wrapper {
  grid-template-columns: repeat(3, 1fr);
}
```

<br>
<br>

## `grid-template-rows`
- 행의 갯수와 크기 지정
- 지정한 값의 갯수에 따라 row 갯수가 정해짐

<br>

> 절대값으로 (직접 grid의 높이를 지정)
```css
.wrapper {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px 400px;
}
```
<br>

> 상대값은 높이가 지정되어 있을 때
```css
.wrapper {
  grid-template-columns: repeat(3, 1fr);
  height: 800px;
  grid-template-rows: 1fr 2fr 3fr;
}
```
<br>

> 내부 컨텐츠의 높이에 따라
```html
  <div class="wrapper">
    <div><div>1</div></div>
    <div><div>2</div></div>
    <div><div>3</div></div>
    <div><div>4</div></div>
    <div><div>5</div></div>
    <div><div>6</div></div>
    <div><div>7</div></div>
    <div><div>8</div></div>
    <div><div>9</div></div>
  </div>
```
```css
/* 전용 세팅 */
.wrapper {
  grid-template-columns: repeat(3, 1fr);
}
.wrapper > div > div { background-color: orange; }
.wrapper > div:nth-child(even) > div { background-color: tomato; }
.wrapper > div:nth-child(3n + 1) > div {
  height: 100px;
}
.wrapper > div:nth-child(3n + 2) > div {
  height: 200px;
}
.wrapper > div:nth-child(3n) > div {
  height: 300px;
}
```

```css
.wrapper {
  grid-template-rows: 100px auto minmax(100px, 200px);
}
```

<br>
<br>

## 아래 gird 만들어보기

![grid 예제 결과](https://gitlab.com/junseol86/fastcampus-lecture-codes/-/raw/master/2020-spring/03-css/06/screenshots/grided.png)


### `grid-column`, `grid-row`
- 선 번호로 영역을 지정
- grid 칸의 갯수가 3개이면 grid 선의 갯수는 4개임! (헷갈리지말기!)

```html
  <div class="wrapper">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
```
```css
/* 기본 세팅 */
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 150px);
}
.wrapper > div {
  background-color: yellow;
}
.wrapper > div:nth-child(even) {
  background-color: yellowgreen;
}
```
<br>

> 아래부터grid 스타일
```css
.wrapper > div:nth-child(1) {
  background-color: red;

  // 선의
  grid-column: 1/4;
  grid-row: 1/2;
}
.wrapper > div:nth-child(2) {
  background-color: green;
  grid-column: 1/2;
  grid-row: 2/4;
}
.wrapper > div:nth-child(3) {
  background-color: purple;
  grid-column: 2/4;
  grid-row: 2/4;
}
.wrapper > div:nth-child(4) {
  background-color: blue;
  grid-column: 1/3;
  grid-row: 4/5;
}
.wrapper > div:nth-child(5) {
  background-color: orange;
  grid-column: 3/4;
  grid-row: 4/5;
}
```

<br>
<br>


## 이름으로 영역 지정
`grid-template-rows`

```css
.wrapper {
  grid-template-areas:
    "red red red"
    "green blue blue"
    "green blue blue"
    "purple purple orange";
}
.wrapper > div:nth-child(1) {
  background-color: red;
  grid-area: red;
}
.wrapper > div:nth-child(2) {
  background-color: green;
  grid-area: green;
}
.wrapper > div:nth-child(3) {
  background-color: blue;
  grid-area: blue;
}
.wrapper > div:nth-child(4) {
  background-color: purple;
  grid-area: purple;
}
.wrapper > div:nth-child(5) {
  background-color: orange;
  grid-area: orange;
}
```

<br>
<br>

## grid간 공간 띄우기

```css
.wrapper {
  gap: 10px;
}
```

<br>

