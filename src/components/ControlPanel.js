import React from 'react';
import logo from '../logo.svg';

function ControlPanel(props) {

    return (
        <header className="App-header">
            <p>Minesweeper <img src={logo} className="App-logo" alt="logo" /></p>
            <p className="status-bar">
                <span className="bombs-counter">10</span>
                <button className="reset">Reset</button>
                <span className="timer">0:00</span>
            </p>
        </header>
    );
}

export default ControlPanel;