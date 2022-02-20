import React from "react";

const Button = () => {
  const handleClick = (name, e) => {
    console.log("hello " + name, e.target);
  };

  return (
    <div>
      <button
        onClick={
          (e) => handleClick("Lela", e)

          /*handleClick ()
       if you want to call the function straight away without pressing the button use the parenthesis,
        {handleClick()}otherwise take the parentheses off (do not call the function*/
        }
      >
        Click here
      </button>
    </div>
  );
};

export default Button;
