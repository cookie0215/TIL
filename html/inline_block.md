# [TIL] HTML 요소
## inline요소와 block요소

### inline 요소

```html
<a> <b> <br> <button> <cite> <em> <i> <img> <input> <label> <script>
<select> <small> <span> <strong> <sub> <sup> <textarea>
```
> button 등 일부는 일반적으로 브라우저에서 inline-block 요소로 변환됨

- `내용부의 크기`가 요소의 크기를 결정 (**자체적 크기 없음**)
  + 높이, 너비, 외부/내부 여백 설정 불가
  + 내용부의 가로, 세로 정렬 설정 불가

- 줄바꿈을 강제하지 않음
- 그 안에 컨텐츠 요소만큼만 자리를 차지함!
- 보통은 다른 데이터와 인라인 요소만 포함 (블록 레벨 요소 포함 불가)

<br>

***

<br>

### block 요소

```html
<article> <aside> <blockquote> <div> <footer> <form> <h1>~<h6>
<header> <hr> <li> <nav> <ol> <p> <section> <ul>
```

- 자체적인 크기와 여백을 가짐
- 부모 요소의 한 줄을 독점, `강제 줄바꿈` (자기 너비에 관계없이)
- 일반적으로 타 인라인 요소와 블록 레벨 요소를 포함 가능

<br>

***

<br>

## inline-block 요소
inline 요소와 block 요소의 특징이 혼합됨

- 자체적인 크기와 여백을 가짐
- 줄바꿈을 강제하지 않음

