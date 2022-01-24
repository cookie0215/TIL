/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'

const color = 'white';

const Button = styled.button`
  padding: 20px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const paragraph = css`
  color: green;

  header & {
    color: blue;
  }
`

const EmotionExample = () => {
  return (
    <>
      <div
        css={css`
      padding: 32px;
      background-color: gold;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
      >
        Hover to change color.
      </div>

      <Button>Button</Button>

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

      {/* Fallback */}
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