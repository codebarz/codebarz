"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Position {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const requestRef = useRef<number>(undefined);
  const previousTimeRef = useRef<number>(undefined);

  // Smooth animation loop for cursor
  const animate = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        // Cursor follows with slight delay (fast)
        setCursorPosition((prev) => ({
          x: prev.x + (mousePosition.x - prev.x) * 0.15,
          y: prev.y + (mousePosition.y - prev.y) * 0.15,
        }));
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [mousePosition]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate]);

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isVisible]);

  // Magnetic effect on interactive elements
  useEffect(() => {
    const handleElementEnter = (e: Event) => {
      setIsHovering(true);
      const target = e.target as HTMLElement;
      // Check if it's a text-heavy element (buttons, links with text)
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHoveringText(true);
      }
    };

    const handleElementLeave = () => {
      setIsHovering(false);
      setIsHoveringText(false);
    };

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, [data-magnetic]"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleElementEnter);
      el.addEventListener("mouseleave", handleElementLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementEnter);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, []);

  // Text elements hover detection
  useEffect(() => {
    const textElements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, a, button, li, label"
    );

    const handleTextEnter = () => setIsHoveringText(true);
    const handleTextLeave = () => {
      // Only set to false if not hovering an interactive element
      if (!isHovering) setIsHoveringText(false);
    };

    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleTextEnter);
      el.addEventListener("mouseleave", handleTextLeave);
    });

    return () => {
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleTextEnter);
        el.removeEventListener("mouseleave", handleTextLeave);
      });
    };
  }, [isHovering]);

  // Re-attach effects when DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, [data-magnetic]"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setIsHovering(true);
          setIsHoveringText(true);
        });
        el.addEventListener("mouseleave", () => {
          setIsHovering(false);
          setIsHoveringText(false);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null; // Don't show on touch devices
  }

  // Calculate sizes based on state
  const invertCircleSize = isHoveringText ? (isHovering ? 70 : 50) : 0;

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Inversion/contrast circle - shows when hovering text/buttons */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full mix-blend-difference"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          width: invertCircleSize,
          height: invertCircleSize,
          backgroundColor: "white",
          transform: "translate(-50%, -50%)",
          opacity: isVisible && isHoveringText ? 1 : 0,
          transition:
            "width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease",
        }}
      />

      {/* Outer ring - follows with slight delay */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full border"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          width: isHoveringText ? 0 : isHovering ? 50 : isClicking ? 25 : 35,
          height: isHoveringText ? 0 : isHovering ? 50 : isClicking ? 25 : 35,
          borderColor: isHovering
            ? "rgba(56,189,248,0.8)"
            : "rgba(255,255,255,0.5)",
          borderWidth: isHovering ? 2 : 1,
          transform: "translate(-50%, -50%)",
          opacity: isVisible && !isHoveringText ? 1 : 0,
          transition:
            "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease, border-width 0.3s ease",
        }}
      />

      {/* Inner dot - follows cursor precisely */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          width: isHoveringText ? 0 : isHovering ? 8 : isClicking ? 12 : 6,
          height: isHoveringText ? 0 : isHovering ? 8 : isClicking ? 12 : 6,
          backgroundColor: isHovering ? "#38bdf8" : "white",
          transform: "translate(-50%, -50%)",
          opacity: isVisible && !isHoveringText ? 1 : 0,
          transition:
            "width 0.15s ease, height 0.15s ease, background-color 0.2s ease, opacity 0.3s ease",
        }}
      />
    </>
  );
}
