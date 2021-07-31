import React, {useState} from "react";

function Field(props) {

    const renderField = () => {

        const cells = props.field.map((cell, index) => {
            switch (cell) {
                case 'O': {
                    return (
                        <div key={index}
                             className="open"
                        ></div>
                    );
                    break;
                }
                case 'OM': {
                    return (
                        <div key={index}
                             className="mine"
                        >
                        </div>
                    );
                }
                case 'F': {
                    return (
                        <div key={index}
                             className="target"
                        >
                        </div>
                    );
                }
                default: {
                    return (
                        <div key={index}
                             className="cell"
                             onClick={(event) => props.handleClick(event, index)}
                             onContextMenu={(event) => props.handleRightClick(event, index)}
                        ></div>
                    );
                    break;
                }
            }
        });
        return cells;
    }
    
    return (
        <main className="field">
            {renderField()}
        </main>
    );
}

export default Field;