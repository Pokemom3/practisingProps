import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      {/* When adding props.children - the unknown props/ dynamic HTML - 
      - we have to wrap them in 1 parent <div>
       */}
      <h1>
        This is {props.name} they are {props.Age}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;

/* this.props.name when accessing props from a class component.
props are immutable - they cannot be changed by the children.
state =useSate and this.state
props are PASSED to components
states are managed WITHIN componenets.
*/
