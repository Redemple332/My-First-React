import React, { useState } from "react";
export default function Sample() {
  let [num, setNum] = useState(0);

  function increment() {
    setNum((num += 1));
  }

  function decrement() {
    if (num > 0) setNum((num -= 1));
  }
  return (
    <div className="bg-red-500 flex justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold underline">Plus Minus</h1>
        <div className="flex m-5">
          <button
            onClick={increment}
            className="bg-slate-700 w-10 rounded-md text-white font-extrabold"
          >
            +
          </button>
          <h1 className="m-5 text-white text-[30px] font-extrabold">{num}</h1>
          <button
            onClick={decrement}
            className="bg-slate-700 w-10 rounded-md text-white font-extrabold"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
