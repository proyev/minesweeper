import React, {useState} from "react";

function Field() {
    const [field, setField] = useState(Array(72).fill(null));
    
    const handleClick = (event) => {
        event.target.className="cell fired";
    }
    
    const handleRightClick = () => {
        
    }
    
    return (
        <main className="field">
            {field.map((tile, index) => <div key={index} 
                                             className="cell"
                                             onClick={handleClick}
                                             on
            >{field[index]}</div>)}
        </main>
    );
}

export default Field;