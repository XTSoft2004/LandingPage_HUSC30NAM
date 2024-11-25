"use client";

import React from "react";

import TimeCountDown from "@/components/UI/TimeCountDown";

export default function Home() {
    return (
        <>
            <TimeCountDown targetDate="2025-01-01T00:00:00" />
        </>
    )
}