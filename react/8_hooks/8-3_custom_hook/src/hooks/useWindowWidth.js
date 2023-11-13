import { useState, useEffect } from "react";

/* 브라우저 창 너비를 조절할 때마다 
width사이즈가 자유자재로 바뀌게 만들기 */

export default function useWindowWidth() {
  // 현재 브라우저의 width (창 너비)를 구해준다.
  const [width, setWidth] = useState(window.innerWidth);

  // resize될때마다 값이 변경되어야 하기 때문에,
  // 렌더링되는 직후에(렌더링될때마다) resize가 적용될 수 있도록
  // useEffect에 적용하는 것이다.
  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    // resize될때마다 렌더링되면서 너비값이 실시간으로 변하는 것을 볼 수 있다.
    window.addEventListener('resize', resize);

    // cleanup ( useWindowWidth를 사용하지 않을 땐 해당 이벤트를 제거한다.)
    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])

  return width;
}