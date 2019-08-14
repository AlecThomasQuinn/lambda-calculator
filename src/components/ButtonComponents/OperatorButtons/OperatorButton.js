import React from "react";

const OperatorButton = (props) => {
  return (
    <> 
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button>{props.operaterCharacter}</button>
      {/* (above) we must pass props with the same property that 
      we assigned it in Operators.js*/}

    </>
  );
};

export default OperatorButton;