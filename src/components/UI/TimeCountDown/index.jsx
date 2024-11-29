"use client";
import React, { useState, useEffect, useRef } from "react";

import "./time.module.css";

const TimeCountDown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({});
    const intervalRef = useRef();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            intervalRef.current = setInterval(() => {
                setTimeLeft(calcTimeLeft());
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, []);

    function calcTimeLeft() {
        const diff = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (diff > 0) {
            timeLeft = {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            };
        }

        return timeLeft;
    }

    return (
        <div>
            {timeLeft.days !== undefined ? (
                <div>
                    <span>{timeLeft.days} </span>
                    <span>{timeLeft.hours} </span>
                    <span>{timeLeft.minutes} </span>
                    <span>{timeLeft.seconds}</span>
                </div>
            ) : (
                <span>Time's up!</span>
            )}
        </div>
    );
};

export default TimeCountDown;