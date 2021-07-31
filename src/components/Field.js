import React, {useState} from "react";
import logo from '../logo.svg';

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
        <>
            <header className="App-header">
                <p>Minesweeper <img src={logo} className="App-logo" alt="logo" /></p>
                <p className="status-bar">
                    <span className="bombs-counter">💣{props.counter}</span>
                    <button className="reset">🙂</button>
                    <span className="timer">0:00</span>
                </p>
            </header>
            <main className="field">
                {renderField()}
            </main>
        </>
    );
}

export default Field;