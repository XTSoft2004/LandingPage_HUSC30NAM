"use client";

import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import style from "./scrolltotop.module.css";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        scroll.scrollToTop({
            duration: 300,
        });
    };

    return (
        <>
            <button title="Back to top"
                className={`${style.totop} ${isVisible ? style.active : ""}`}
                onClick={handleClick}
            >
                <svg viewBox="0 0 384 512">
                    <path
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>

        </>
    );
};

export default ScrollToTop;