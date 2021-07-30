import React, {useState} from 'react';
import Field from '../components/Field';

function FieldContainer() {
    const [field, setField] = useState(Array(72).fill(null));

    const handleClick = (event) => {
        event.target.className="fired";
    }

    const handleRightClick = () => {

    }
    
    return (
        <Field handleClick={handleClick}
               field={field}
               
        />
    );
}

export default FieldContainer;