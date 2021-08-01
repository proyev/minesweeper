import React, { useState, useEffect } from 'react';
import Game from '../components/Game';

function GameContainer() {
    const [fieldWidth, setFieldWidth] = useState(8);

    const generateField = () => {
        const field = Array(72).fill(null);
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * 72);
            field[randomIndex] = 'M';
        }

        for (let i = 0; i < field.length; i++) {
             let cellScore = 0;
             const isLeftEdge = (i % fieldWidth === 0);
             const isRightEdge = (i % fieldWidth === fieldWidth - 1);
             const isTopRow = ((i - fieldWidth) < 0);
             const isBottomRow = ((i + fieldWidth) > field.length);
             if (!field[i]) {
                 if (!isLeftEdge && field[i-1] === 'M') cellScore++;
                 if (!isRightEdge && field[i+1] === 'M') cellScore++;
                 if (!isTopRow && field[i-fieldWidth] === 'M') cellScore++;
                 if (!isBottomRow && field[i+fieldWidth] === 'M') cellScore++;
                 if (!isTopRow && !isRightEdge && field[i+1-fieldWidth] === 'M') cellScore++;
                 if (!isBottomRow && !isRightEdge && field[i+1+fieldWidth] === 'M') cellScore++;
                 if (!isTopRow && !isLeftEdge && field[i-1-fieldWidth] === 'M') cellScore++;
                 if (!isBottomRow && !isLeftEdge && field[i-1+fieldWidth] === 'M') cellScore++;
                 field[i] = cellScore;
                 console.log(`${i} :: ${field[i]}`);
             }
        }
        return field;
    }

    const [field, setField] = useState([]);
    const [counter, setCounter] = useState(10);
    const [time, setTime] = useState('0:00');
    const [gameStatus, setGameStatus] = useState({
        gameOver: false
    });

    useEffect(() => {
        setField(generateField());
    }, []);

    const handleClick = (event, index) => {
        event.preventDefault();
        const updatedField = field.slice();
        if (updatedField[index] === 'M') {
            console.log('YOU LOST');
            setGameStatus({
                gameOver: true
            });
            updatedField[index] = 'MO';
        } else if(updatedField[index]) {
            updatedField[index] += 'O';
            console.log(updatedField[index]);
        } else {
            updatedField[index] += 'O';
            setField(updatedField);
            const isLeftEdge = (index % fieldWidth === 0);
            const isRightEdge = (index % fieldWidth === fieldWidth - 1);
            const isTopRow = ((index - fieldWidth) < 0);
            const isBottomRow = ((index + fieldWidth) > field.length);
            if (!isLeftEdge && field[index-1] === 0) handleClick(event, index-1);
            if (!isRightEdge && field[index+1] === 0) handleClick(event, index+1);
            if (!isTopRow && field[index-fieldWidth] === 0) handleClick(event, index-fieldWidth);
            if (!isBottomRow && field[index+fieldWidth] === 0) handleClick(event, index+fieldWidth);
            if (!isTopRow && !isRightEdge && field[index+1-fieldWidth] === 0) handleClick(event, index+1-fieldWidth);
            if (!isBottomRow && !isRightEdge && field[index+1+fieldWidth] === 0) handleClick(event, index+1+fieldWidth);
            if (!isTopRow && !isLeftEdge && field[index-1-fieldWidth] === 0) handleClick(event, index-1-fieldWidth);
            if (!isBottomRow && !isLeftEdge && field[index-1+fieldWidth] === 0) handleClick(event, index-1+fieldWidth);
        }
        setField(updatedField);
    }

    const handleRightClick = (event, index) => {
        event.preventDefault();
        const updatedField = field.slice();
        if(updatedField[index] === 'F') {
            updatedField[index] = null;
            setField(updatedField);
            setCounter(prev => prev + 1);
        }else if (counter > 0) {
            updatedField[index] = 'F';
            setField(updatedField);
            setCounter(prev => prev - 1);
        }

    }
    
    return (
        <>
            <Game handleClick={handleClick}
                   handleRightClick={handleRightClick}
                   field={field}
                   counter={counter}
                   time={time}
            />
        </>
    );
}

export default GameContainer;