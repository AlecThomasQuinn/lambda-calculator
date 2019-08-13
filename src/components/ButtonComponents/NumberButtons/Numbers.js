import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton';

//Import your array data to from the provided data file
// this is a 'named import' since we did not use 'deafult' in the
// export statement in data.js
import {numbers} from '../../../data';

const  Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersArr, setNumbersArr] = useState(numbers)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbersArr.map(number => {return <NumberButton letter={number} numberValue={number} />})}
       
    </div>
  );
};

export default Numbers;
