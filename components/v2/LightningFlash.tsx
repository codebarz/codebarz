"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Flash {
  id: number;
  x: number;
  y: number;
  size: number;
  intensity: number;
}

export default function LightningFlash() {
  const [flashes, setFlashes] = useState<Flash[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const flashIdRef = useRef(0);
  const lastFlashTimeRef = useRef(0);

  const createFlash = useCallback(() => {
    const now = Date.now();
    // Throttle flashes - minimum 150ms between flashes
    if (now - lastFlashTimeRef.current < 150) return;
    lastFlashTimeRef.current = now;

    // Random chance to create a flash (not every scroll triggers one)
    if (Math.random() > 0.4) return;

    const newFlash: Flash = {
      id: flashIdRef.current++,
      x: Math.random() * 100, // percentage across viewport
      y: Math.random() * 100, // percentage down viewport
      size: 200 + Math.random() * 400, // size of the glow
      intensity: 0.03 + Math.random() * 0.08, // subtle intensity
    };

    setFlashes((prev) => [...prev, newFlash]);

    // Remove flash after animation completes
    setTimeout(() => {
      setFlashes((prev) => prev.filter((f) => f.id !== newFlash.id));
    }, 300);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      createFlash();

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set scrolling to false after scroll stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [createFlash]);

  // Occasionally trigger multiple flashes in quick succession (like real lightning)
  useEffect(() => {
    if (!isScrolling) return;

    const burstInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        // 30% chance of a burst
        createFlash();
        setTimeout(() => createFlash(), 50);
        setTimeout(() => createFlash(), 100);
      }
    }, 500);

    return () => clearInterval(burstInterval);
  }, [isScrolling, createFlash]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {flashes.map((flash) => (
        <div
          key={flash.id}
          className="absolute rounded-full animate-lightning-flash"
          style={{
            left: `${flash.x}%`,
            top: `${flash.y}%`,
            width: `${flash.size}px`,
            height: `${flash.size}px`,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, rgba(255, 255, 255, ${
              flash.intensity
            }) 0%, rgba(200, 220, 255, ${
              flash.intensity * 0.5
            }) 30%, transparent 70%)`,
          }}
        />
      ))}

      {/* Ambient screen flash for dramatic effect */}
      {flashes.length > 0 && (
        <div
          className="absolute inset-0 animate-screen-flash"
          style={{
            background: `radial-gradient(ellipse at ${flashes[0]?.x || 50}% ${
              flashes[0]?.y || 50
            }%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)`,
          }}
        />
      )}
    </div>
  );
}
