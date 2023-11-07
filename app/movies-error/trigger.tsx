"use client";
import { useState } from "react";

const Trigger = () => {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    throw new Error("Something went wrong");
  }
  return (
    <div>
      <button
        onClick={() => {
          setClicked(true);
        }}
        className="mt-4 hover:underline">
        Click Here to Trigger an Error 👍
      </button>
    </div>
  );
};

export default Trigger;
