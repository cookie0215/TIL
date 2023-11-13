# [TIL] CSS_HTML문서에 적용하기

### Inline Style
- HTML 문서에서 해당 태그 안에 직접 CSS 속성을 지정해서 사용하는 방법
```
// html파일

<body>
  <div style="background-color: red, color: white">안녕하세요~</div>
</body>
```

<br>

### Internal Style Sheet
- HTML 문서 내의 `<head>`태그에 `<style>`태그를 사용하여 CSS 스타일을 적용하는 방법

```
//html 파일

<head>
  <style>
    div { background-color: lightyellow; }
  </style>
</head>
<body>
  <div>안녕하세요~</div>
</body>
```

<br>

### External Style Sheet
- 별도로 .css 확장자를 만들어 CSS 스타일을 적용하는 방법
- html 문서에 `<link>`태그를 이용하여 만든 css 파일을 연결한다.

```
//css 파일

div { background-color: blue; }
```
```
//html 파일

<head>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div>안녕하세요~</div>
</body>
```

<br>
<hr>

### 적용된 스타일 우선순위
아래와 같이 스타일 우선 순위에 따라 나타난다.

0. 스타일 속성에 `!important`를 사용
1. 인라인 스타일 (HTML 요소 내부에 위치함)
2. 내부 / 외부 스타일 시트 (HTML 문서의 head 요소 내부에 위치함)
3. 웹 브라우저 기본 스타일

→ 스타일 속성에 `!important` 지정과 인라인 방식을 사용하는 것은 지양하는 것이 좋다!