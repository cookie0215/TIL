# [TIL] HTML inline 과 block

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

```html

<!-- inline요소안에 block요소를 사용하는 것은 불가능하다!! -->
<span> <div></div> </span>

<!-- inline요소안에 또 다른 inline요소를 넣는 것은 가능함!! -->
<span> <span></span> </span>
```
<br>

- inline요소에서 margin / padding 으로 여백을 줄 때,  
상하의 여백은 적용이 안되지만 **좌우 여백은 적용을 받는다!**  

<br>
<br>

---

<br>

### block 요소

```html
<article> <aside> <blockquote> <div> <footer> <form> <h1>~<h6>
<header> <hr> <li> <nav> <ol> <p> <section> <ul>
```

- 자체적인 크기와 여백을 가짐
- 콘텐츠의 영역을 설정하는 용도
- 부모 요소의 한 줄을 독점, `강제 줄바꿈` (자기 너비에 관계없이)
- 일반적으로 타 인라인 요소와 블록 레벨 요소를 포함 가능
<br>

```html

<!-- block요소안에 block/inline요소 넣는 것 모두  가능함!! -->
<div> <span></span> </div>
<div> <div></div> </div>

```

<br>

- margin, padding 값이 잘 적용된다.

<br>
<br>

---

<br>

## inline-block 요소
inline 요소와 block 요소의 특징이 혼합됨

- 자체적인 크기와 여백을 가짐
- 줄바꿈을 강제하지 않음

