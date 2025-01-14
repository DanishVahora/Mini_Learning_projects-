import React, { useState, useRef } from "react";
import "./Times.css"; // Import the CSS file


const Times = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const startTimeRef = useRef(null);
    const [lapList, setLapList] = useState([]); // Array to store laps
    const timerRef = useRef(null);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = time % 1000;

        return `${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")} : ${String(milliseconds).padStart(3, "0")}`;
    };

    const handleStart = () => {
        if (!isRunning) { //check if stopwatch is running or not
            startTimeRef.current = Date.now() - elapsedTime; //suppose if the current time is 10000ms, //
            // then starttimeref will set to (current time ms - time passed in stopwatch), so that we can store the start timing of the stopwatch    
            setIsRunning(true);
            timerRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 1);
        }
    };

    const handleStop = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            setIsRunning(false);
        }
    };

    const handleReset = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setElapsedTime(0);
        setLapList([]);
    };

    const handleLap = () =>{
        if(isRunning)
            setLapList([...lapList, formatTime(elapsedTime)]);
    }

    return (
        <div className="stopwatch-container">
            <div className="stopwatch">
                <div className="time-display">{formatTime(elapsedTime)}</div>
                <div className="buttons">
                    <button className="triangle-button start" onClick={handleStart}>Start</button>
                    <button className="triangle-button stop" onClick={handleStop}>Stop</button>
                    <button className="triangle-button reset" onClick={handleReset}>Reset</button>
                </div>
                <br />
                <div className="lap" >
                    <button className="triangle-button" onClick={handleLap}>Lap</button>
                </div>
            </div>
            <div className="lap-list">
                    <h3>Laps</h3>
                    {lapList.map((lap, index) => (
                        <p key={index}>{`Lap ${index + 1}: ${lap}`}</p>
                    ))}
            </div>
        </div>
    );
};

export default Times;
