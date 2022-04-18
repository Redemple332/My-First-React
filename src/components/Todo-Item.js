import React from "react";

export default function todoItem(props) {
  console.log(props);
  return (
    <div className="flex justify-between mt-5">
      <h6>{props.name}</h6>
      <button className="bg-red-500 w-[80px]  text-white font-extrabold ml-3">
        Delete
      </button>
    </div>
  );
}
