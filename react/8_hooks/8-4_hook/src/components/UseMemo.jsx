import { useCallback, useMemo, useState } from "react"

function sum(persons) {
  console.log('sum')
  return persons.map(person => {
    return person.age
  }).reduce((l, r) => l + r, 0);
}

export default function UseMemo() {
  const [value, setValue] = useState('');
  const [persons] = useState([
    { name: 'Mark', age: 35 },
    { name: 'Hanna', age: 20 },
  ])

  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);


  function change(e) {
    setValue(e.target.value);
  }

  const click = useCallback(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <input type="text" value={value} onChange={change} />
      <button onClick={click}>click</button>
      <p>{count}</p>
    </div>
  )
}