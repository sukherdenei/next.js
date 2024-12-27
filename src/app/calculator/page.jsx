"use client";
import { useState } from "react";
import "./calculator.css";
import RenderResult from "next/dist/server/render-result";

// export default function Page() {
//   const [screen, setScreen] = useState("");

//   function buttonClicked(too) {
//     setScreen(screen + too);
//   }

//   function clearHandler() {
//     setScreen("");
//   }

//   function operationHandler() {
//     if (screen.includes("+")) {
//       //screem = "7+6" -> ["7", "6"]
//       const nums = screen.split("+");
//       const result = Number(nums[0]) + Number(nums[1]);//13
//       setScreen(result);
//     } else if (screen.includes("-")) {
//       const nums = screen.split("-");
//       const result = Number(nums[0]) - Number(nums[1]);
//       setScreen(result);
//     } else if (screen.includes("*")) {
//       const nums = screen.split("*");
//       const result = Number(nums[0]) * Number(nums[1]);
//       setScreen(result);
//     } else if (screen.includes("/")) {
//       const nums = screen.split("/");
//       const result = Number(nums[0]) / Number(nums[1]);
//       setScreen(result);
//     }
//   }

//   return (
//     <div className="style">
//       <p className="p">{screen}</p>
//       <div className="num">
//         <button onClick={() => buttonClicked(1)}>1</button>
//         <button onClick={() => buttonClicked(2)}>2</button>
//         <button onClick={() => buttonClicked(3)}>3</button>
//         <button onClick={() => buttonClicked(4)}>4</button>
//         <button onClick={() => buttonClicked(5)}>5</button>
//         <button onClick={() => buttonClicked(6)}>6</button>
//         <button onClick={() => buttonClicked(7)}>7</button>
//         <button onClick={() => buttonClicked(8)}>8</button>
//         <button onClick={() => buttonClicked(9)}>9</button>
//         <button onClick={() => buttonClicked(0)}>0</button>
//         <button onClick={() => buttonClicked("+")}>+</button>
//         <button onClick={() => buttonClicked("-")}>-</button>
//         <button onClick={() => buttonClicked("*")}>*</button>
//         <button onClick={() => buttonClicked("/")}>/</button>
//         <button onClick={operationHandler}>=</button>
//         <button onClick={clearHandler}>C</button>
//       </div>
//     </div>
//   );
// }
export default function App() {
  let [screen, setScreen] = useState("");
  const [operation, setOperation] = useState("+");

  function buttonClicked(a) {
    setScreen(screen + a);
    // switch (a) {
    //   case "+":
    //     setOperation("+");
    //     break;
    // }
  }

  function Handler() {
    let nums;
    if (screen.includes("+")) {
      nums = screen.split("+");
    } else if (screen.includes("-")) {
      nums = screen.split("-");
    }
    console.log(nums);
    const newArr = nums.map((num) => {
      return Number(num);
    });
    console.log(newArr);
    screen = 0;
    for (let i = 0; i < newArr.length; i++) {
      screen += newArr[i];
    }
    setScreen(screen);

    // let result = 0;
    // switch (operation) {
    //   case "+":
    //     result = Number(nums[0]) + Number([1]);
    //     break;
    // }
    // setScreen(result);
  }

  return (
    <div className="style">
      <p className="p">{screen}</p>
      <div className="num">
        <button onClick={() => buttonClicked(1)}>1</button>
        <button onClick={() => buttonClicked(2)}>2</button>
        <button onClick={() => buttonClicked(3)}>3</button>
        <button onClick={() => buttonClicked(4)}>4</button>
        <button onClick={() => buttonClicked(5)}>5</button>
        <button onClick={() => buttonClicked(6)}>6</button>
        <button onClick={() => buttonClicked(7)}>7</button>
        <button onClick={() => buttonClicked(8)}>8</button>
        <button onClick={() => buttonClicked(9)}>9</button>
        <button onClick={() => buttonClicked(0)}>0</button>
        <button onClick={() => buttonClicked("+")}>+</button>
        <button onClick={() => buttonClicked("-")}>-</button>
        <button onClick={() => buttonClicked("*")}>*</button>
        <button onClick={() => buttonClicked("/")}>/</button>
        <button onClick={() => Handler()}>=</button>
      </div>
    </div>
  );
}
