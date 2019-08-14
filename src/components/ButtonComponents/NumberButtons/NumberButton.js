import React, { useState } from "react";


const NumberButton = (props) => {
  return (
    <>
      <button>{props.numberValue} </button>
      {/* the names of props are arbitrary, DOT numberValue could be 
      DOT banana if we wanted it to. It depends on the context of what 
      the 'props' actually are. 
      
      A more accurate passing of data between
      this component and the Numbers.js component would be to pass 
      'numberArr' instead of 'props' since in this case, this specific
      NumberButton component is being passed an array that is called 
      'numberArr' 
      
      This would work in this specific case, since we have three different
      buttons for 3 different components. But if we wanted to use ONE button
      component for 3 diffent components, we SHOULD call it props so that we 
      understand the more abstract nature of the way the data is flowing into
      the component - the component is 'data agnostic.' As long as the data has
      'whatever', props.whatever will pull 'whatever'*/}

      {/* I had it all wrong! The reason it is called 'props' is because
      we are assigning our component object PROPertieS ... PROPS
      these PROPS are given the value of whatever data we want through
      our useState*/}
    </>
  );
};

export default NumberButton;