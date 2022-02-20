import React, { useState } from "react";

const Button = () => {
  const [age, setAge] = useState(32);
  const handleClick = () => {
    setAge(47);
  };

  return (
    <div>
      <p>{age}</p>
      <button
        onClick={handleClick}

        /*handleClick ()
       if you want to call the function straight away without pressing the button use the parenthesis,
        {handleClick()}otherwise take the parentheses off (do not call the function*/
      >
        Click here
      </button>
    </div>
  );
};

export default Button;
