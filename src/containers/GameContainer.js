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
             }
        }
        return field;
    }

    const [field, setField] = useState(generateField());
    const [counter, setCounter] = useState(10);
    const [foundCounter, setFoundCounter] = useState(0);
    const [time, setTime] = useState(0);
    const [status, setStatus] = useState('🙂');
    const [gameStart, setGameStart] = useState(false);

    useEffect(() => {
        let interval = null;
        if (gameStart) {
            interval = setInterval(() => {
                setTime(prev => ++prev)
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [gameStart]);

    useEffect(() => {
        console.log('FOUND IT');
        console.log(foundCounter);
        if (foundCounter === 10) {
            setGameStart(false);
            setStatus('🤩');
        } else if (foundCounter > 6) {
            setStatus('😝');
        } else if  (foundCounter > 4) {
            setStatus('😜');
        } else if (foundCounter > 2) {
            setStatus('😏');
        }
    }, [foundCounter]);


    const updateField = (fieldCopy, index) => {
        if (fieldCopy[index] === 'M') {
            fieldCopy[index] = 'MO';
            setTimeout(() => setGameStart(prev => !prev), 10);
            setTimeout(() => setStatus('🤯'), 10);
        } else if(fieldCopy[index] === 0) {
            if (fieldCopy[index][1] !== 'O') {
                fieldCopy[index] += 'O';
            }
            const isLeftEdge = (index % fieldWidth === 0);
            const isRightEdge = (index % fieldWidth === fieldWidth - 1);
            const isTopRow = ((index - fieldWidth) < 0);
            const isBottomRow = ((index + fieldWidth) > field.length);
            if (!isLeftEdge) updateField(fieldCopy, index-1);
            if (!isRightEdge) updateField(fieldCopy, index+1);
            if (!isTopRow) updateField(fieldCopy, index-fieldWidth);
            if (!isBottomRow) updateField(fieldCopy, index+fieldWidth);
            if (!isTopRow && !isRightEdge) updateField(fieldCopy, index+1-fieldWidth);
            if (!isBottomRow && !isRightEdge) updateField(fieldCopy, index+1+fieldWidth);
            if (!isTopRow && !isLeftEdge) updateField(fieldCopy, index-1-fieldWidth);
            if (!isBottomRow && !isLeftEdge) updateField(fieldCopy, index-1+fieldWidth);
        } else if (typeof fieldCopy[index] === 'number') {
            fieldCopy[index] += 'O';
        }
        return fieldCopy;
    }

    const handleClick = (event, index) => {
        event.preventDefault();
        let updatedField = field.slice();
        updatedField = updateField(updatedField, index);
        setField(updatedField);
        if (!time) {
            setGameStart(true);
        }
    }

    const handleRightClick = (event, index) => {
        event.preventDefault();
        const updatedField = field.slice();
        if (updatedField[index][updatedField[index].length - 1] === 'F') {
            updatedField[index][0] === 'M' ? updatedField[index] = 'M' : updatedField[index] = Number(updatedField[index][0]);
            setField(updatedField);
            setCounter(prev => ++prev);
        }else if (counter > 0) {
            updatedField[index] += 'F';
            setField(updatedField);
            setCounter(prev => --prev);
            if (updatedField[index] === 'MF') {
                console.log("FOUND SMTH");
                setFoundCounter(prev => ++prev);
            }
        }
    }

    const handleReset = (event) => {
        event.preventDefault();
        setTime(0);
        setGameStart(false);
        setField(generateField());
        setCounter(10);
        setStatus('🙂');
    }
    
    return (
        <>
            <Game  handleClick={handleClick}
                   handleRightClick={handleRightClick}
                   handleReset={handleReset}
                   field={field}
                   counter={counter}
                   time={time}
                   status={status}
            />
        </>
    );
}

export default GameContainer;