// "use client";
// import React from "react";
// export default function Page() {
//   let a = 10;
//   function buttonClicked() {
//     console.log("buton is clicked");
//   }
//   return (
//     <div>
//       <p> page {a}</p>
//       <button onClick={buttonClicked}>CLICK ME BBY</button>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";
// export default function Page() {
//   const [number, setNumber] = useState(10);

//   function buttonClicked() {
//     setNumber(100);
//   }
//   return (
//     <div>
//       <p>page{number}</p>
//       <button onClick={buttonClicked}>CLICK ME</button>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";

// export default function Page() {
//   // react hook, components dotor ashiglana
//   const [number, setNumber] = useState(10);
//   function buttonClicked() {
//     setNumber(number + 1);
//   }
//   return (
//     <div>
//       <p>page{number}</p>
//       <button onClick={buttonClicked}>increase</button>
//     </div>
//   );
// }

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
    </div>
  );
}
