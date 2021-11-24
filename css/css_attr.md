# [TIL] CSS_속성

### font-family : 글꼴 그룹
> 사용자의 컴퓨터에 지정한 폰트가 없을 때를 대비하여 여럿 지정
```css
  p { font-family: 돋움; }
  p { font-family: "맑은 고딕", 돋움, 굴림; }
```
<br>
<br>

### font-size : 글자 크기
| 단위 | 설명 | 비고 |
| :-- | :-- | :-- |
| `px` | 절대 크기: 모니터상의 한 점 | 사용자가 브라우저를 통해 조정 불가: **낮은 접근성** |
| `em` | 상대 크기: 바로 윗 부모의 크기에 비례 | 중첩마다 제곱 |
| `rem` | 상대 크기: 최상위 조상의 크기에 비례 | 일반적으로 body의 글자 크기: 16px |

```html
  일반 텍스트
  <span>바깥쪽 span
    <span>중간 span
      <span>안쪽 span
      </span>
    </span>
  </span>
```
```css
span { font-size: 24px; }
```
```css
/*부모요소를 기준으로 글자크기가 비례*/
span { font-size: 1.5em; }
```
```css
/*최상위기준으로 글자크기 비례*/
span { font-size: 1.5rem; }
```

<br>
<br>

### font-weight : 글자 굵기
| 값 | 설명 | 비고 |
| :-- | :-- | :-- |
| `100 ~ 900` | 절대값 | 100 단위로 입력 |
| `normal` | 일반 굵기 | 400 |
| `bold` | 두껍게 | 700, 자주 사용됨 |
| `lighter`, `bolder` | 상속보다 얇거나 두껍게 | 정도는 상속된 값마다 다름 |

```css
span { font-weight: 900; }
```
```css
span { font-weight: bold; }
```
```css
body { font-weight: 100; }
span { font-weight: bolder; }
```

<br>
<br>

### font-style : 글자 스타일
| 값 | 설명 | 비고 |
| :-- | :-- | :-- |
| `normal` | 일반 서체 |  |
| `italic` | 기울임 | 기울여 쓴 서체 - 주로 사용됨 |
| `oblique` | 기울임 | 본 서체를 기울인 것 |

<br>
<br>

### font : 위의 font속성을 한꺼번에 작성할 수 있다.
font: (`fontWeight`) (`fontSize`)/(`lineHeight`) (`fontFamily`);
ex) p { font: bold 2.4rem/1px "arial" };

<br>
<br>

### color : 글자 색

```css
span { color: blue; }
```
```css
/* 빨강 + 초록 + 파랑 (0~255) */
span { color: rgb(0, 0, 255); }
```
```css
/* 빨강 + 초록 + 파랑 (0~255) + 불투명도 (0~1) */
span { color: rgba(0, 0, 255, 0.5); }
```
```css
/* 16진수 표기 */
span { color: #FF0000 }
```

<br>
<br>

### text-decoration : 글자에 선 긋기

```html
  <span>일반</span>
  <span class="underline">밑줄</span>
  <span class="overline">윗줄</span>
  <span class="line-through">취소선</span>
```
```css
.none { text-decoration: none; }
.underline { text-decoration: underline; }
.overline { text-decoration: overline; }
.line-through { text-decoration: line-through; }
```

<br>
<br>

### letter-spacing : 자간 조정(가로)
```html
  일반 텍스트
  <span>자간이 조정된 텍스트</span>
```
```css
span { letter-spacing: 0.1em; }
```

<br>
<br>

### text-align : 텍스트 정렬
> block, inline-block, table 요소

`left` | `right` | `center` | `justify`
> text-align속성의 justify값은 글자를 좌우정렬 시킨다. 

```html
  <p>
    Cascading Style Sheets(CSS)는 HTML이나 XML(SVG, XHTML 같은 XML 방언(dialect) 포함)로 작성된 문서의 표현을 기술하기 위해 쓰이는 스타일시트 언어입니다. CSS는 요소가 화면, 종이, 음성이나 다른 매체 상에 어떻게 렌더링되어야 하는지 기술합니다.<br>
    CSS는 오픈 웹의 핵심 언어 중 하나이며 여러 브라우저가 표준으로 사용하는 W3C 명세가 있습니다. 레벨 단위로 개발한 CSS1은 더 이상 사용하지 않고, 다음 레벨인 CSS2.1은 권고안(recommendation)입니다. 더 작은 모듈로 나눈 CSS3은 표준화 과정을 밟고 있습니다.
  </p>
```
```css
p { text-align: left; }
```

<br>
<br>

### line-height : 행간조절(높이)

```css
p { line-height: 24px; }
```
```css
p { line-height: 1.25; }
```
```css
p { line-height: 1.25em; }
```
```css
p { line-height: 125%; }
```

<br>
<br>

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


