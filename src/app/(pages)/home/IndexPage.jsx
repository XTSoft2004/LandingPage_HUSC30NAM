"use client";

import React from "react";

import TimeCountDown from "@/components/UI/TimeCountDown";
import Sec2 from "./sec2";
export default function IndexPage() {
  return (
    <>
      <Sec2 />
      <TimeCountDown targetDate="2025-01-01T00:00:00" />
    </>
  );
}
