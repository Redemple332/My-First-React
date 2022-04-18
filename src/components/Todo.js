import React, { useState } from "react";
import TodoItem from "./Todo-Item";

export default function Todo() {
  let [name, nameState] = useState([
    { name: "Camping" },
    { name: "Basketball" },
    { name: "Torjak" },
    { name: "Biking" },
  ]);

  return (
    <div className="bg-slate-300 h-[100vh] flex justify-center items-center">
      <div>
        <div>
          <input id="name" placeholder="Add New Item Here...."></input>
          <button className="bg-slate-700 w-10  text-white font-extrabold ml-3">
            Add
          </button>
        </div>
        {name.map((item) => (
          <TodoItem name={item.name} />
        ))}
      </div>
    </div>
  );
}
