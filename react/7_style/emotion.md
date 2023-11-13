# [TIL] React_Emotion

[기본 CSS & CSS Module](https://github.com/cookie0215/TIL/blob/main/react/7_style/react_style.md)     
[Styled Components](https://github.com/cookie0215/TIL/blob/main/react/7_style/styled_components.md)      

<br />

## css in JS : Emotion 방식
- CSS-in-JS의 종류 중 하나로 JavaScript 안에서 스타일을 작성하는 라이브러리   
  → 문자열 또는 객체 스타일로 앱의 스타일을 빠르게 지정 가능   
- **고유의 className이 부여**되기 때문에 스타일코드가 중복 오염될 일이 거의 없다.
- 재사용 가능

- 서버사이드렌더링에 따로 서버쪽에 설정을 하지 않아도 된다는 장점이 있고,    
  번들사이즈가 styled component보다 확실히 작기 때문에 라이브러리 용도로 적합함

- emotion은 style-component방식도 같이 사용할 수 있다.

- css사용방식은 객체 형태로 작성할 수도 있고, `@emotion/styled`가 설치되었다면 ` `` ` 리터럴 방식으로 작성할 수도 있다.

- 같은 CSS 속성이 있다면, 제일 최근 것으로 덮어씌워진다.
- 미디어쿼리도 사용 가능 (변수를 활용 및 응용할 수 있다.)

- 값에 숫자만 입력했을 때 자동으로 `px` 로 인식한다.

<br />
<br />
<br />

## Emotion 사용 방법

1. `npm i @emotion/styled @emotion/react` 설치하기

    ```PowerShell
    # Framework Agnostic (프레임워크와 상관없이 사용할 때)
    $ npm install @emotion/css

    # React에서 사용할 때 설치
    $ npm install @emotion/react

    # styled-components와 유사한 방식의 사용을 위해 설치
    $ npm i @emotion/styled
    ```

<br />

2. 아래 2개의 코드 줄을 해당 파일상단에 넣는다!   
  (반드시 `/** ~ */` 으로 쓰여진 코드도 넣어야지 정상적으로 동작하는 것을 볼 수 있다.)

    ```jsx
    /** @jsxImportSource @emotion/react */
    import { css, jsx } from '@emotion/react'
    ```

<br />

***[연습1] Object Styles 형태와 String Styles형태의 emotion 코드 비교하기***

```jsx
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

const color = 'white';

const EmotionExample = () => {
  return (
    <>
      <div
        css={{
          backgroundColor: 'tomato',
          padding: '10px',
          border: '2px solid gold',
          '&:hover': {
            color: 'white'
          }
        }}
      >
        1번 : Object Styles
      </div>

      <div
        css={css`
          background-color: tomato;
          padding: 10px;
          border: 2px solid gold;
          &:hover {
            color: ${color};
          }
        `}
      >
        2번 : String Styles
      </div>
    </>
  );
};

export default EmotionExample;
```

![image](https://user-images.githubusercontent.com/81572770/150727570-7434ad2f-9e5d-4215-aeae-b9844c8188ce.png)

→ 1번 div, 2번 div 각각 객체형태와 리터럴형태로 스타일을 작성했으나 결과물은 동일하게 출력되는 것을 볼 수 있다.     
(둘 다 각각 hover하면 폰트color 흰색으로 바뀜)

<br />

***[연습2] Fallback 예제***    
*( Fallback 이란? : 지정해놓은 스타일을 지원하지 않는 브라우저라면 다른 대체값으로 스타일을 보여줄 수 있도록 만든 것 )*

```jsx
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

const EmotionExample = () => {
  return (
    <>
      <div
        css={{
          background: [
            'red',
            'linear-gradient(#e66465, #9198e5)'
          ],
          height: 50
        }}
      >
        This has a gradient background in browsers that support
        gradients and is red in browsers that don't support
        gradients!
      </div>
    </>
  );
};

export default EmotionExample;
```
→ 만약 구형 브라우저가 linear-gradient 스타일을 지원하지 않는다면 해당 색상은 깨져서 보일 것이다.    
그래서 스타일이 깨지는 것을 방지하기 위해 다른 대체값(red)을 배열 형태로 두어     
만약 linear-gradient 색상이 적용되지 않더라도 red 색상이 적용되도록 만드는 것이다!

<br />

***[연습3] `&`를 활용해 일반 p태그와 header태그 안에 있는 p태그의 스타일을 다르게 적용하기***

```jsx
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

const paragraph = css`
  color: green;

  header & {
    color: blue;
  }
`

const EmotionExample = () => {
  return (
    <>
      <div>
        <header>
          <p css={paragraph}>
            This is green since it's inside a header
          </p>
        </header>
        <p css={paragraph}>
          This is turquoise since it's not inside a header.
        </p>
      </div>
    </>
  );
};

export default EmotionExample;
```
![image](https://user-images.githubusercontent.com/81572770/150730061-5d89aedf-a66a-4760-931f-98371129e925.png)



<br />
<br />