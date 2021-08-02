import React, {useState} from "react";
import logo from '../logo.svg';

function Game(props) {
    const min = Math.floor(props.time / 60);
    let sec = props.time % 60;
    while (sec < 10) {
        sec = '0' + sec;
    }

    const renderField = () => {

        const cells = props.field.map((cell, index) => {

            if (cell === 'MO') {
                return (
                    <div key={index}
                         className="mine"
                    >
                    </div>
                );
            } else if (cell[cell.length - 1] === 'O') {
                console.log(cell);
                return (
                    <div key={index}
                         className="open"
                    >
                        <p>
                            {props.field[index][0] == 0 ? null : props.field[index][0]}
                        </p>
                    </div>
                );
            } else if (cell[cell.length - 1] === 'F') {
                return (
                    <div key={index}
                         className="target"
                         onContextMenu={(event) => props.handleRightClick(event, index)}
                    >
                    </div>
                );
            } else {
                return (
                    <div key={index}
                         className="cell"
                         onClick={(event) => props.handleClick(event, index)}
                         onContextMenu={(event) => props.handleRightClick(event, index)}
                    ></div>
                );
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
                    <span className="timer">{String(min)}:{sec}</span>
                </p>
            </header>
            <main className="field">
                {renderField()}
            </main>
        </>
    );
}

export default Game;