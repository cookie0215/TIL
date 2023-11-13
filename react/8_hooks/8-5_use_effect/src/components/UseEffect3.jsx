import React, { useEffect, useState } from "react";

const Practice3 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
      console.log("타이머 실행중", count);
    }, 3000);
    return () => {
      clearInterval(intervalId);
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