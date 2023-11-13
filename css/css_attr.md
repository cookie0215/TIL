# [TIL] CSS_속성

### list-style : ul 목록의 불릿 없애기

```html
  <ul>
    <li>못생긴</li>
    <li>불릿은</li>
    <li>이제 그만</li>
  </ul>
```
```css
ul {
  list-style: none;
  padding: 0;
}
```

<br>
<br>

### opacity : 불투명도
```html
  <span>오퍼시티가 적용된 요소</span>
```
```css
span {
  opacity: 0.5;
}
```

<br>
<br>

## 상자 관련 스타일

<br>

### width , height : 높이와 너비
| 단위 | 설명 | 
| :-- | :-- |
| `px` | 절대 크기: 모니터상의 한 점 |
| `%` | 상대 크기: 바로 윗 부모의 크기에 비례 |
| `vw` | 상대 크기: 뷰포트 너비의 1/100 |
| `vh` | 상대 크기: 뷰포트 높이의 1/100 |
| `vmax` | 상대 크기: 뷰포트 너비, 높이 중 긴 쪽의 1/100 |
| `vmin` | 상대 크기: 뷰포트 너비, 높이 중 짧은 쪽의 1/100 |

* pc환경에서 vmax는 가로부분이되고, 모바일환경에서는 vmax가 세로부분이 된다!

```html
  <div class="outer">
    <div class="inner"></div>
  </div>
```
```css
/* 기본 세팅 */
body {
  padding: 0;
  margin: 0;
}
.outer { 
  width: 80%;
  height: 640px;
  background-color: yellowgreen;
}
.inner { background-color: green; }
```  

<br>

```css
.inner {
  width: 400px;
  height: 300px;
}
```
```css
.inner {
  width: 50%;
  height: 50%;
}
```
```css
.inner {
  width: 50vw;
  height: 50vh;
}
```
```css
.inner {
  width: 50vmin;
  height: 50vmin;
}
```
```css
/*calc()를 이용해 간단한 연산 가능*/
.inner {
  width: calc(100% - 100px);
  height: calc(50vh + 200px);
}
```

<br>
<br>

### margin : 바깥쪽 여백
margin: (`위`) (`오른쪽`) (`아래`) (`왼쪽`);

```html
  <div class="outer">
    <div class="inner">inner div</div>
    <div class="inner">inner div</div>
    <div class="inner">inner div</div>
  </div>
```
```css
body {
  padding: 0;
  margin: 0;
}
.outer { 
  background-color: yellowgreen;
}
.inner { 
  color: white;
  background-color: green; 
}
```

<br>

```css
.inner {
  margin: 24px;
}
```
```css
.inner {
  margin-top: 24px;
  margin-right: 48px;
  margin-bottom: 0;
  margin-left: 12px;
}
```
```css
/*값이 4개일 때: 위쪽부터 시계방향순*/
.inner {
  margin: 24px 48px 0 12px;
}
```
```css
/*값이 2개일 때: 상하, 좌우를 의미*/
.inner {
  margin: 12px 48px;
}
```
```css
/*값이 3개일 때: 위, 좌우, 아래를 의미 */
.inner {
  width: 300px;
  margin: 12px auto 24px;
}
```

<br>
<br>

### padding : 안쪽 여백
padding: (`위`) (`오른쪽`) (`아래`) (`왼쪽`);

```css
.outer {
  padding: 24px;
}
```
```css
.outer {
  padding-top: 24px;
  padding-right: 48px;
  padding-bottom: 0;
  padding-left: 12px;
}
```
```css
.outer {
  padding: 24px 48px 0 12px;
}
```
```css
.outer {
  padding: 12px 48px;
}
```

<br>
<br>

### border : 테두리 선
border: (`선 굵기`) (`선 스타일`) (`선 색`);

<br>

| 선 스타일 | 설명 |  
| :-- | :-- |
| `solid` | 직선 |
| `dashed` | 점이 긴 점선 |
| `dotted` | 점선 |

<br>

```html
  <div>테두리가 있는 div</div>
```
```css
div {
  margin: 24px;
  padding: 24px;
  border: 1px solid black;
}

div {
  border-top: 1px solid black;
  border-right: 3px dashed green;
  border-bottom: 9px dotted #ff6347;
  border-left: 0;
}
```

<br>
<br>

### border-radius : 둥근 모서리
border-radius:(`왼.위`) (`오른.위`) (`오른.아래`) (`왼.아래`); 

```html
  <div>둥근 모서리</div>
```
```css
div {
  width: 400px;
  height: 400px;
  line-height: 400px;
  text-align: center;
  color: white;
  background-color: orange;
  border: 2px solid darkorange;
}
```

<br>

```css
/*값이 1개일 때: 전체 모서리를 의미*/
div {
  border-radius: 8px;
}
```
```css
div {
  border-radius: 50%;
}
```
```css
div {
  border-radius: 24px 0 25% 50%;
}
```

<br>
<br>

### background : 배경  

| 속성 | 설명 |  
| :-- | :-- |
| `background-color` | 배경색 |
| `background-image` | 배경 이미지 |
| `background-size` | 배경 이미지 크기 |
| `background-position` | 배경 이미지 위치 |
| `background-repeat` | 배경 이미지 반복 여부 |


```css
div { 
  background-color: green; 
}
```
```css
div { 
  background-color: rgba(255, 255, 0, 0.5); 
}
```
```css
div {
  background-image: url("./nature.jpg");
  background-size: 50% 50%;
  background-repeat: no-repeat;
  background-position: 50px 50%;
}
```
```css
div {
  /* 비율 유지, 상자에 빈 곳이 없도록 꽉 채움 */
  background-image: url("./nature.jpg");
  background-size: cover;
}
```
```css
div {
  /* 비율 유지, 상자를 벗어나지 않도록 꽉 채움 */
  background-image: url("./nature.jpg");
  background-size: contain;
}
```

<br>
<br>

***

<br>
<br>

### box-shadow : 그림자
> 바깥쪽 그림자
box-shadow: (`x-offset`) (`y-offset`) ( [옵션] `blur`) (`color`);
box-shadow: (`x-offset`) (`y-offset`) ( [옵션] `blur`) ( [옵션] `spread`) (`color`);

> 안쪽 그림자
box-shadow: inset (`x-offset`) (`y-offset`) ( [옵션] `blur`) ( [옵션] `spread`) (`color`);

```html
  <div></div>
```

```css
div {
  box-shadow: 1px 1px black;
}
```
```css
div {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}
```
```css
div {
  box-shadow: 
  0 0 4px red,
  2px 2px 8px orange,
  4px 2px 12px yellow;
}
```


