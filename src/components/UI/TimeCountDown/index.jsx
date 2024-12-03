"use client";

import { useState, useEffect } from "react";
import style from "./time.module.css";

export default function TimeCountDown() {
  const targetDate = new Date("2025-06-01").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [prevTimeLeft, setPrevTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calcTimeLeft());
    setPrevTimeLeft(calcTimeLeft());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevTimeLeft((prev) => ({ ...prev, ...timeLeft }));
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  function calcTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const renderSlideDown = (value, prevValue, label) => (
    <div className={`${style.timebox}`}>
      <div className={`${style.slidewrapper}`}>
        {prevValue !== value && (
          <div
            key={`prev-${prevValue}`}
            className={`${style.time} ${style.old}`}
          >
            {prevValue < 10 ? `0${prevValue}` : prevValue}
          </div>
        )}
        <div key={`new-${value}`} className={`${style.time} ${style.new}`}>
          {value < 10 ? `0${value}` : value}
        </div>
      </div>
      <div className={`${style.label}`} style={{ marginTop: "15px" }}>
        {label}
      </div>
    </div>
  );

  const renderSeparator = () => <div className={`${style.separator}`}>:</div>;

  return (
    <>
      <div className={`text-white py-5`}>
        <p className={`${style.text} neonText`} style={{ fontSize: "4.0rem" }}>
          Đếm Ngược
        </p>
        <div
          className={`${style.countdown} ${style.responsiveCountdown}  text-uppercase`}
        >
          {renderSlideDown(timeLeft.days, prevTimeLeft.days, "Ngày")}
          {renderSeparator()}
          {renderSlideDown(timeLeft.hours, prevTimeLeft.hours, "Giờ")}
          {renderSeparator()}
          {renderSlideDown(timeLeft.minutes, prevTimeLeft.minutes, "Phút")}
          {renderSeparator()}
          {renderSlideDown(timeLeft.seconds, prevTimeLeft.seconds, "Giây")}
        </div>
      </div>
    </>
  );
}
