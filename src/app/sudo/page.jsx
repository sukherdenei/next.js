// "use client";
// import { useState } from "react";
// import "./sudo.css";
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// export default function Page() {
//   const [num, setNum] = useState(0);

//   const nem = () => {
//     setNum(num + 1);
//   };

//   const has = () => {
//     setNum(num - 1);
//   };
//   return (
//     <div className="zagvar">
//       <button onClick={nem}>nemeh</button>
//       <button onClick={has}>hasah</button>
//       <h1>{num}</h1>
//       <h1 className="xxx">
//         {numbers.map((a) => {
//           return a;
//         })}
//       </h1>
//     </div>
//   );
// }

"use client";
import "./sudo.css";
import React, { use, useState } from "react";

// export default function Page() {
//   const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   const increasement = () => {
//     setNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   };
//   const decreasement = () => {
//     const sortt = num.sort((a, b) => {
//       return b - a;
//     });
//     // console.log(dec1);
//     setNum([...sortt]);
//   };

//   return (
//     <div className="sudo">
//       <button className="dec" onClick={decreasement}>
//         hasah
//       </button>
//       <button className="inc" onClick={increasement}>
//         nemeh
//       </button>
//       <div className="numbers">
//         {num.map((a) => {
//           return <h4 key={a}>{a}</h4>;
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
//       <button onClick={hasah}>hasah</button>
//       <button onClick={nemeh}>nemeh</button>
//       <div className="numbers">
//         {num.map((a) => {
//           return <h1 key={a}>{a}</h1>;
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
export default function Page() {
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const nemeh = () => {
    setNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  };
  const hasah = () => {
    const sort = num.sort((a, b) => {
      return b - a;
    });
    setNum([...sort]);
  };
  return (
    <div className="sudo">
      <button onClick={nemeh}>+</button>
      <button onClick={hasah}>-</button>
      <div className="numbers">
        {num.map((a) => {
          return <p key={a}>{a}</p>;
        })}
      </div>
    </div>
  );
}
