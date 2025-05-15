/*import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        className="startInput"
        placeholder="enter your name"
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}
  */

import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    if (inputRef.current.value.trim()) {
      setUsername(inputRef.current.value.trim());
    }
  };

  return (
    <div className="start">
      <h2 className="startTitle">
        🎯 Welcome to Quizzo!
      </h2>
      <input
        className="startInput"
        placeholder="Enter your name..."
        ref={inputRef}
        onKeyDown={e => e.key === 'Enter' && handleClick()}
      />
      <button className="startButton" onClick={handleClick}>
        🚀 Start
      </button>
    </div>
  );
}




