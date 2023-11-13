# [TIL] CSS_text속성

### `color : 글자 색`
- rgb(0,0,0) 인 검정색이 기본 값

<br>

```css
span { color: blue; }

/* 빨강 + 초록 + 파랑 (0~255) */
span { color: rgb(0, 0, 255); }`

/* 빨강 + 초록 + 파랑 (0~255) + 불투명도 (0~1) */
span { color: rgba(0, 0, 255, 0.5); }`

/* 16진수 표기 */
span { color: #FF0000 }
```

<br>

### `text-align : 텍스트 정렬`
- block, inline-block, table 요소
`left` | `right` | `center` | `justify`
- text-align속성의 justify값은 글자를 좌우 정렬 시킨다.

<br>

```html
<style>
	p { text-align: left; }
<style>  
<p>
  Cascading Style Sheets(CSS)는 HTML이나 XML(SVG, XHTML 같은 XML 방언(dialect) 포함)로 작성된 문서의 표현을 기술하기 위해 쓰이는 스타일시트 언어입니다. CSS는 요소가 화면, 종이, 음성이나 다른 매체 상에 어떻게 렌더링되어야 하는지 기술합니다.<br>
  CSS는 오픈 웹의 핵심 언어 중 하나이며 여러 브라우저가 표준으로 사용하는 W3C 명세가 있습니다. 레벨 단위로 개발한 CSS1은 더 이상 사용하지 않고, 다음 레벨인 CSS2.1은 권고안(recommendation)입니다. 더 작은 모듈로 나눈 CSS3은 표준화 과정을 밟고 있습니다.
</p>
```

<br>

### `text-decoration : 글자에 선 긋기`
- 속성 값  
    - none : 장식(선) 없음 → 기본값이지만, a태그에서는 text-decoration: underline;값이 기본값이다.
    - underline : 밑줄
    - overline : 윗줄
    - line-through : 중앙선 (취소선으로 사용된다.)

<br>

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

### text-indent
- 문자 첫 줄을 들여쓰기(글자가 오른쪽으로 더 들어가 있는 모습)할 때 사용
- 속성값
    - 0 (기본값)
    - 만약 음수값으로 사용한다면, 내어쓰기 (왼쪽으로 툭 튀어 나온 모습) 상태를 만들 수 있다.