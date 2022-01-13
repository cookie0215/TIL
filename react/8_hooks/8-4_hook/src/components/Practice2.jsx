import { useState, useMemo } from "react";

export default function ShowState({ number, text }) {
  const getNumber = (number) => {
    console.log("숫자가 변동되었습니다.");
    return number;
  };

  const getText = (text) => {
    console.log("글자가 변동되었습니다.");
    return text;
  };

  const showNumber = useMemo(() => getNumber(number), [number]);
  const showText = useMemo(() => getText(text), [text]);

  return (
    <div className="info-wrapper">
      {showNumber} <br />
      {showText}
    </div>
  );
}