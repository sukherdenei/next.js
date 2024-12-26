// "use client";
// import { useState } from "react";
// import "./sudo.css";

"use client";
import "./sudo.css";
import React, { use, useState } from "react";

// export default function Page() {
//   const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   const nemeh = () => {
//     setNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   };
//   const hasah = () => {
//     const sort = num.sort((a, b) => {
//       return b - a;
//     });
//     setNum([...sort]);
//   };
//   return (
//     <div className="sudo">
//       <button onClick={nemeh}>+</button>
//       <button onClick={hasah}>-</button>
//       <div className="numbers">
//         {num.map((a) => {
//           return <p key={a}>{a}</p>;
//         })}
//       </div>
//     </div>
//   );
// }
// export default function Page() {
//   const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   const nemeh = () => {
//     setNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   };
//   const hasah = () => {
//     const sort = num.sort((a, b) => {
//       return b - a;
//     });
//     setNum([...sort]);
//   };
//   return (
//     <div className="sudo">
//       <button onClick={nemeh}>+</button>
//       <button onClick={hasah}>-</button>
//       <div className="numbers">
//         {num.map((a) => {
//           return <p key={a}>{a}</p>;
//         })}
//       </div>
//     </div>
//   );
// }
// export default function Home() {
//   const [num, setNum] = useState(10);
//   const nemeh = () => {
//     setNum(num + 1);
//   };
//   const hasah = () => {
//     setNum(num - 1);
//   };
//   const huvaah = () => {
//     setNum(num / 2);
//   };
//   const urjih = () => {
//     setNum(num * 2);
//   };
//   return (
//     <div>
//       <button onClick={nemeh}>+</button>
//       <button onClick={hasah}>-</button>
//       <button onClick={urjih}>*</button>
//       <button onClick={huvaah}>%</button>
//       <p>{num}</p>
//     </div>
//   );
// }
export default function Home() {
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const increasement = () => {
    setNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  };
  const decreasement = () => {
    const sort = num.sort((a, b) => {
      return b - a;
    });
    setNum([...sort]);
  };
  return (
    <div className="sudo">
      <button onClick={increasement}>+</button>
      <button onClick={decreasement}>-</button>
      <div className="numbers">
        {num.map((a) => {
          return <p key={a}>{a}</p>;
        })}
      </div>
    </div>
  );
}
