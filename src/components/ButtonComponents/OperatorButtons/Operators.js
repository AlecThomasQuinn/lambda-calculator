import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton'

//Import your array data to from the provided data file
import {operators} from '../../../data';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsArr, setOperatorsArr] = useState(operators);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       {  // in the return statement we use {} to specify JavaScript

          // making sure I am pulling the operators data properly
          console.log(operators)
        }

        {
          //mapping over the data found in operators
          operatorsArr.map(operator =>{
            // (above) arrow function defining logic applied to 
            // each item in the operatorsArr array

            // return statement that returns an OperatorButton component
            // with PROPERTIES AKA PROPS assigned to match the shape of the
            // data being passed in via useState()
            return <OperatorButton operaterCharacter={operator.char} operatorValue={operator.value} />
          })
        }
    </div>
  );
};

export default Operators;