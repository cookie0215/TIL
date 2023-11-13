import { useState } from "react"

// props와 state를 사용해서 
// 최하위 컴포넌트(E) 의 데이터를 최상위 컴포넌트(A에게 전달하기
export default function A2() {
  const [value, setValue] = useState('A2 : 아직 바뀌지 않은 상태');

  return (
    <div>
      <p>{value}</p>
      <B setValue={setValue} />
    </div>
  )
}

function B({ setValue }) {
  return (
    <div>
      <p>이곳은 B 컴포넌트 입니다.</p>
      <C setValue={setValue} />
    </div>
  )
}

function C({ setValue }) {
  return (
    <div>
      <p>이곳은 C 컴포넌트 입니다.</p>
      <D setValue={setValue} />
    </div>
  )
}
function D({ setValue }) {
  return (
    <div>
      <p>이곳은 D 컴포넌트 입니다.</p>
      <E setValue={setValue} />
    </div>
  )
}
function E({ setValue }) {
  const click = () => {
    setValue((value) => { return value = 'A2 : A값 변경함' })
  }

  return (
    <div>
      <p>이곳은 E 컴포넌트 입니다.</p>
      <button onClick={click}>[A2에 위치한 버튼] E의 값 바꾸기</button>
    </div>
  )
}

