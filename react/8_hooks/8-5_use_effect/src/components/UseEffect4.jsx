import React, { useEffect, useState } from "react";

const Practice3 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("실행", count);
    return () => {
      console.log("종료", count);
    };
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      카운트 : {count}
      <button onClick={handleClick}>증가</button>
    </div>
  );
};

export default Practice3;