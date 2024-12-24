//1-9 towch drh
"use client";
import Style from "./cal.module.css";

import React, { useState } from "react";
export default function Page() {
  const [number, setNumber] = useState("setNum");

  function buttonClicked(a) {
    setNumber(a);
  }

  return (
    <div className={Style.xx}>
      <p>Тоогоо оруулна уу:{number}</p>
      <button onClick={() => buttonClicked(1)}>1</button>
      <button onClick={() => buttonClicked(2)}>2</button>
      <button onClick={() => buttonClicked(3)}>3</button>
      <button onClick={() => buttonClicked(4)}>4</button>
      <button onClick={() => buttonClicked(5)}>5</button>
      <button onClick={() => buttonClicked(6)}>6</button>
      <button onClick={() => buttonClicked(7)}>7</button>
      <button onClick={() => buttonClicked(8)}>8</button>
      <button onClick={() => buttonClicked(9)}>9</button>
      <button onClick={() => buttonClicked(10)}>10</button>
    </div>
  );
}
