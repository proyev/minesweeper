import React, {useState} from "react";

function Field(props) {
    
    return (
        <main className="field">
            {props.field.map((tile, index) => <div key={index}
                                             className="cell"
                                             onClick={props.handleClick}

            >{props.field[index]}</div>)}
        </main>
    );
}

export default Field;