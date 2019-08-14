import React, { useState } from "react";
import SpecialButton from './SpecialButton';
import {specials} from '../../../data';

const Specials = () => {
  const [specialsArr, setSpecialsArr] = useState(specials)

  return (
    <div>
      {specialsArr.map(special => 
        <SpecialButton 
        specialValue = {special}/>
      )}
    </div>
  );
};

export default Specials;

// In the other buttons I am adding more than is needed onto the arrow
// function, I don't need the {} after =>, but will leave them for reference

// line 19 is half-true, in an arrow function you only need the {}
// if the logic is on one line

// I am not so sure about line 21... I need to review ES6 stuff