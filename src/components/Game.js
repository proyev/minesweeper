import React from "react";
import logo from '../logo.svg';

function Game(props) {
    const min = Math.floor(props.time / 60);
    const sec = props.time % 60;

    const renderSeconds = sec => {
        while (sec < 10) {
            return '0' + sec;
        }
        return String(sec);
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
                return (
                    <div key={index}
                         className="open"
                    >
                        <p>
                            {Number(props.field[index][0]) === 0 ? null : props.field[index][0]}
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
                <div>Minesweeper <img src={logo} className="App-logo" alt="logo" /></div>
                <div className="status-bar">
                    <span className="bombs-counter">💣{props.counter}</span>
                    <button className="reset" onClick={props.handleReset}>{props.status}</button>
                    <span className="timer">{String(min)}:{renderSeconds(sec)}</span>
                </div>
            </header>
            <main className="field">
                {renderField()}
            </main>
        </>
    );
}

export default Game;