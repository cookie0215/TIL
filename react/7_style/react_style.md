# [TIL] React_기본 CSS & CSS Module
React에서 style을 적용하는 방법에는 여러가지가 있다.    

[Styled Components](https://github.com/cookie0215/TIL/blob/main/react/7_style/styled_components.md)         
[Emotion](https://github.com/cookie0215/TIL/blob/main/react/7_style/emotion.md)   

<br />

## 인라인 방식
- `style={{}}` 형태로 작성, 안에는 json 형식으로 **속성명:'속성값'** 으로 입력
- 태그가 선언된 그 자리에서 바로 스타일을 주는 방식
- 간단하게 작성하기 쉽기 때문에 간단한 예제 만들때 사용하기 편리함 
- 하지만 대형 프로젝트에서 사용하기엔 부적합하다. (한 번 수정사항이 생기면 일이이 다 수정해야 함)
- 가상 클래스 등은 적용할 수 없다 (스타일 지정할 때 제약이 있음)   

<br />

***[예시] 인라인 방식으로 style적용***

```jsx
const Btn = () => (
  <button 
    id='btn' 
    style={{ 
      backgroundColor: 'tomato',
      color: 'white',
      padding: '10px 20px',
      border: 0,
      borderRadius: 10,
    }} 
  >
    Click me!
  </button>
);
```

<br />
<br />

## 기본 CSS 방식
- html에 link태그로 css 연결하듯이 리액트 컴포넌트에 css파일을 import하는 방식   
  → style.css파일 생성해서 `import "./style.css";`로 컴포넌트에 연결
- css파일이 전역으로 존재하기 때문에  A 컴포넌트에서 사용한 className을 B 컴포넌트에서도 사용하게 되면   
  원치 않은 스타일이 중복되어 나타날 수 있다.

<br />

***[예시] 기본 css방식으로 style적용***

```jsx
// A 컴포넌트
import "./style.css";

const A = () => {
  return(
    <div>
    	<button className="btn"></button>
    </div>
  )
}

export default App;
```
```css
/* style.css 파일 */

.btn {
  background-color: tomato;
  color: #fff;
  padding: 10px 20px;
  border: 0;
  borderRadius: 10;
}
```

<br />
<br />
<br />

## CSS Module 방식
- CRA에서 제공하는 css모듈은 스타일을 각 클래스명에 부여할 때 전역적으로 **오염될 수 있는 상황을 막기 위해**
  각 **클래스명마다 고유의 이름을 자동으로 만들어 준다.**    
  → 작성해놓은 className이  `[파일명]_[클래스명]__[해시코드]` 형태로 변환되면서 브라우저에 출력되기 때문에   
  className이 중복되도 상관없다. 
  (개발자도구에서 고유 className으로 변환된 것을 확인할 수 있음!)  
- css와 js파일이 분리되어 있다. 

<br />

### CSS Moudule 사용 방법

1. style을 작성하기 위해 `파일명.module.css` 파일을 생성한다.    
  (반드시 확장자명이 `.module.css` 형태여야 함!!)

2. `import styles from "./파일명.module.css";`    
  해당 컴포넌트에 생성한 css module파일을 가져온다.

3. 해당 태그에 className을 작성할 때 `class={styles['aaa']}` 또는 `class={styles.aaa}` 이렇게 작성해준다.

<br />

***[예시] css module 방식으로 style적용***

```jsx
// A 컴포넌트
import styles from "./Style.module.css";

const A = () => {
  return(
    <div>
    	<button className={styles.btn1}></button>
    	<button className={styles['btn2']}></button>
    </div>
  )
}

export default App;
```
```css
/* style.module.css 파일 */

.btn1 {
  background-color: tomato;
  color: #fff;
  padding: 10px 20px;
  border: 0;
  border-radius: 10;
}

.btn2 {
  background-color: blue;
  color: #fff;
  padding: 10px 20px;
  border: 0;
  border-radius: 10;
}
```

<br />
<br />
