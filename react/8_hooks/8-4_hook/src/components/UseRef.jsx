import { createRef, useState, useRef } from "react"

export default function UseRef() {
  const [value, setValue] = useState('');
  const input1Ref = createRef();
  const input2Ref = useRef();

  function change(e) {
    setValue(e.target.value);
  }

  console.log(input1Ref.current, input2Ref.current)

  return (
    <div>
      {/* controll input */}
      <input type="text" value={value} onChange={change} />

      {/* unControll input */}
      <input type="text" ref={input1Ref} />
      <input type="text" ref={input2Ref} />
    </div>
  )
}

/*
createRef()
- null 값으로 출력된다.
- 렌더될때마다 새로운 ref를 만든다.

useRef()
- 최조 렌더 시, undefined가 출력된다.
- input값이 입력되면 <input>이 출력된다.
- 렌더를 계속 진행하더라도 값을 유지해서 출력한다.

*/