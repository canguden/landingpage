"use client";

import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "@/reisgids.ai.json";

function LottieAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let animation: AnimationItem | null = null;

  useEffect(() => {
    if (containerRef.current) {
      animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      if (animation) {
        animation.destroy(); // Clean up on unmount
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "250px", height: "250px" }} />;
}

export default LottieAnimation;
