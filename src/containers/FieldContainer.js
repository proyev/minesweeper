import React, { useState, useEffect } from 'react';
import Field from '../components/Field';

function FieldContainer() {
    const generateField = () => {
        const field = Array(72).fill(null);
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * 72);
            field[randomIndex] = 'M';
        }
        return field;
    }
    const [field, setField] = useState(generateField());

    const handleClick = (event, index) => {
        event.preventDefault();
        const updatedField = field.slice();
        if (updatedField[index] === 'M') {
            console.log('YOU LOST');
            updatedField[index] = 'OM';
        } else {
            updatedField[index] = 'O';
        }
        setField(updatedField);
    }

    const handleRightClick = (event, index) => {
        event.preventDefault();
        const updatedField = field.slice();
        updatedField[index] = 'F';
        setField(updatedField);
    }
    
    return (
        <>
            <Field handleClick={handleClick}
                   handleRightClick={handleRightClick}
                   field={field}
            />
        </>
    );
}

export default FieldContainer;