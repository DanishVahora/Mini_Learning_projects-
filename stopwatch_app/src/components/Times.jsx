import React, { useState, useRef } from "react";

const Times = () => {
    const [elapsedTime, setElapsedTime] = useState(0); // Total elapsed time in milliseconds
    const [isRunning, setIsRunning] = useState(false); // Tracks if the stopwatch is running
    const startTimeRef = useRef(null); // Tracks the starting point of the stopwatch
    const timerRef = useRef(null); // Stores the interval ID

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = time % 1000;

        return `${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")} : ${String(milliseconds).padStart(3, "0")}`;
    };

    const handleStart = () => {
        if (!isRunning) {
            // Record the start time
            startTimeRef.current = Date.now() - elapsedTime;
            setIsRunning(true);

            // Start an interval to update elapsedTime every millisecond
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
    };

    return (
        <div>
            <h1>{formatTime(elapsedTime)}</h1>

            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Times;
