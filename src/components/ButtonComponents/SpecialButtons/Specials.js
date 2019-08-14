import React, { useState } from "react";
import SpecialButton from './SpecialButton';
import {specials} from '../../../data';

const Specials = () => {
  const [specialsArr, setSpecialsArr] = useState(specials)

  return (
    <div>
      {specialsArr.map(specials => 
        <SpecialButton 
        specialValue = {specials.specialValue}/>
      )}
    </div>
  );
};

// In the other buttons I am adding more than is needed onto the arrow
// function, I don't need the {} after =>, but will leave them for reference