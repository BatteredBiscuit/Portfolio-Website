"use client";

import { ReactNode, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const FadeIn = ({ children, delay = 0, direction = "up" }: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    const distance = "20px";
    switch (direction) {
      case "up":
        return `translateY(${distance})`;
      case "down":
        return `translateY(-${distance})`;
      case "left":
        return `translateX(${distance})`;
      case "right":
        return `translateX(-${distance})`;
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        opacity: 0,
        transform: getTransform(),
        transition: `opacity 0.6s ${theme.transitions.easing.easeOut}, transform 0.6s ${theme.transitions.easing.easeOut}`,
        transitionDelay: `${delay}s`,
        "&.fade-in-visible": {
          opacity: 1,
          transform: "translate(0)",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default FadeIn;
