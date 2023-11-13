import { useState } from "react"

// props와 state를 사용해서 
// 최상위 컴포넌트(A) 의 데이터를 최하위 컴포넌트(E)에게 전달하기
export default function A() {
  const [value, setValue] = useState('A1 : 아직 바뀌지 않은 상태');

  const click = () => {
    setValue((value) => { return value = 'A1 : E값 변경함' })
  }
  return (
    <div>
      <B value={value} />
      <button onClick={click}>[A1에 위치한 버튼] E의 값 바꾸기</button>
    </div>
  )
}

function B({ value }) {
  return (
    <div>
      <p>이곳은 B 컴포넌트 입니다.</p>
      <C value={value} />
    </div>
  )
}
function C({ value }) {
  return (
    <div>
      <p>이곳은 C 컴포넌트 입니다.</p>
      <D value={value} />
    </div>
  )
}
function D({ value }) {
  return (
    <div>
      <p>이곳은 D 컴포넌트 입니다.</p>
      <E value={value} />
    </div>
  )
}
function E({ value }) {
  return (
    <div>
      <p>이곳은 E 컴포넌트 입니다.</p>
      <h3>{value}</h3>
    </div>
  )
}

