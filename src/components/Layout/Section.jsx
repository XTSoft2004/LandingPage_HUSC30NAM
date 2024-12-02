// components/Layout/Section.tsx
"use client";
import { useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Section = ({ name, children }) => {
  const [isInView, setIsInView] = useState(false);
  const refS = useRef(null);

  const inView = useInView(refS, { once: false });

  useEffect(() => {
    setIsInView(inView);
    if (inView) {
      console.log(`Section "${name}" is in view`);
    }
  }, [inView, name]);

  return (
    <div ref={refS} style={{ height: "100vh", border: "1px solid black" }}>
      <h2>{children}</h2>
      <p>Current section: {isInView ? `In View` : `Out of View`}</p>
    </div>
  );
};

export default Section;
