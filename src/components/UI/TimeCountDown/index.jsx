"use client";
import React, { useState, useEffect, useRef } from "react";

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
                    <span>{timeLeft.days}d </span>
                    <span>{timeLeft.hours}h </span>
                    <span>{timeLeft.minutes}m </span>
                    <span>{timeLeft.seconds}s</span>
                </div>
            ) : (
                <span>Time's up!</span>
            )}
        </div>
    );
};

export default TimeCountDown;