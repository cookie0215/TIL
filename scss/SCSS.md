# [TIL] SCSS정리1
[Sass 공식사이트](https://sass-lang.com/)    
[Sass 테스트사이트](https://www.sassmeister.com/)

<br />

## CSS Preprocessor
- CSS 전처리기로써, CSS가 동작하기 전에 사용하는 것   
- 대표 CSS 전처리기 3대장 : Less, Sass(SCSS), Stylus    

<br />

### CSS 전처리기 사용 이유
CSS는 작업이 크고 고도화 될수록 불편함이 발생   
  - 불필요한 선택자(Selector)많아짐   
  - 연산 기능의 한계
  - 구문의 부재

→ SCSS(SASS)를 사용하면 가독성, 재사용성이 높아져서 유지보수가 쉬워지기 때문에 많이 사용된다.   

*(참고로 SASS보다 SCSS가 더 나중에 나왔고,*    
*또한 SCSS가 더 넓은 범용성과 CSS의 호환성 등의 장점이 있어 대부분 SCSS를 사용한다.)*

<br />
<br />

## SCSS 컴파일 방법
- Sass(SCSS)는 웹에서 직접 동작할 수 없기 때문에,   
  SCSS로 작업한 파일은 CSS로 컴파일한 뒤, 실제 브라우저에 출력될 때 표준 CSS로 동작해야 한다.

<br />

### parcel-bundler로 컴파일 하기

1. `npm init -y`을 입력해 해당 프로젝트를 npm환경으로 만들기

2. `npm install parcel-bundler -D`    
  parcel번들러를 개발 의존성모드로 설치하기

3. 설치된 package.json파일에서 script부분 내용 수정하기
  
    ```json
    // package.json
    "scripts": {
      "dev": "parcel index.html",
      "build": "parcel build index.html"
    },
    ```

4. `<link rel="stylesheet" href="scss/파일명.scss">`   
  작업할 index.html과 scss파일 생성한 뒤, html파일에 scss파일 연결하기 

5. `parcel index.html` 또는 `parcel build index.html`을 터미널에 입력하면   
  dist파일이 생성되고 그 안에 자동으로 scss파일이 css로 컴파일(변환) 되어 화면에 출력되고 있음을 볼 수 있다.    

    *(참고로 package.json파일 - "devDependencies" 부분에 sass 패키지가 자동으로 생성되어 있는 것도 볼 수 있다!)*

<br />
<br />

## SCSS 주석
2가지 형태의 주석을 사용할 수 있다.
- `/*  주석 내용  */`   
  : CSS로 컴파일할 때, SCSS에 작성한 `/* 주석내용 */`이 CSS에서도 볼 수 있다.
- `// 주석 내용`
  : CSS로 컴파일할 때, SCSS에 작성한 `// 주석내용` 은 CSS에서도 볼 수 없다.

<br />
<br />

## 중첩(Nesting)
- 상위 선택자의 반복을 피하기 위해 사용
- 좀 더 편리하게 복잡한 구조를 작성

<br />

```html
<div class="container ">
  <ul>
    <li>
      <span class="text">Hello World!</span>
      <span class="icon">💛😎🤗💚</span>
    </li>
  </ul>
</div>
```

<br />

***css로 작성한 경우***

```css
/* css */

.container { width: 100%; height: 100vh; }
.container ul { border: 2px solid red; }
.container ul li .text { color: blue; }
.container ul li .icon { font-size: "24px"; }
```

<br />

***위의 css를 scss로 작성한 경우***

```scss
// scss

.container {
  width: 100%;
  height: 100vh;

  ul {
    border: 2px solid red;
    li {
      .text { color: blue; }
      .icon { font-size: "24px"; }
    }
  }
}
```

<br />
<br />

### `>` : 자식 선택자 참조
주로 scss는 자손 선택자 방식으로 사용하는데,    
css로 컴파일될 때 해당 태그의 부모-자식 관계를 보다 더 명확하게 지정하고 싶다면   
`>`를 사용하면 된다.

<br />

***css로 작성한 경우***

```css
/* css */

.container { width: 100%; height: 100vh; }
.container > ul { border: 2px solid red; }
.container > ul > li .text { color: blue; }
.container > ul > li .icon { font-size: "24px"; }
```

<br />

***위의 css를 scss로 작성한 경우***

```scss
// scss

.container {
  width: 100%;
  height: 100vh;

  > ul {
    border: 2px solid red;
    > li {
      .text { color: blue; }
      .icon { font-size: "24px"; }
    }
  }
}
```

<br />
<br />

### `&` : 상위 부모 선택자 참조
- 중첩 안에서 & 키워드는 상위(부모) 선택자를 참조하여 치환한다.

<br />

***[예제1]***

```css
/* css */

button { position: absolute; }
button.active { color: red; }
```

```scss
// scss

button {
  position: absolute;
  &.active {
    color: red;
  }
}
```
<br />

***[예제2]***

```css
/* css */
.fs-small { font-size: 12px; }
.fs-medium { font-size: 16px; }
.fs-large { font-size: 24px; }
```
```scss
// scss

.fs {
  &-small { font-size: 12px; }
  &-medium { font-size: 16px; }
  &-large { font-size: 24px; }
}
```

<br />
<br />

## 중첩된 속성

<br />
<br />