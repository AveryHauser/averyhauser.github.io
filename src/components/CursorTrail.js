// src/components/CursorTrail.js
import React, { useRef, useEffect, useCallback } from 'react';

// --- Configuration ---
const FADE_DURATION = 200;     // Faster fade
const LINE_WIDTH = 2;
const LINE_COLOR_RGB = '0, 143, 58'; // RGB for #008F3A
const INTERPOLATION_THRESHOLD = 5; // Max distance between points before interpolating
const INTERPOLATION_STEP = 2;      // How far apart interpolated points should be (pixels)

function CursorTrail() {
    const canvasRef = useRef(null);
    const pointsRef = useRef([]); // Stores { x, y, createdAt }
    const animationFrameIdRef = useRef();

    // Helper function to calculate distance
    const dist = (p1, p2) => Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

    // Helper function for linear interpolation
    const lerp = (start, end, t) => start * (1 - t) + end * t;

    const drawTrail = useCallback((ctx, points, currentTime) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        if (points.length < 1) return; // Need at least one point to start

        ctx.lineWidth = LINE_WIDTH;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        let lastPoint = points[0];

        for (let i = 1; i < points.length; i++) {
            const currentPoint = points[i];
            const distance = dist(lastPoint, currentPoint);
            const segments = Math.max(1, Math.floor(distance / INTERPOLATION_STEP)); // Calculate how many segments needed

            for (let j = 1; j <= segments; j++) {
                const t = j / segments; // Interpolation factor (0 to 1)

                // Interpolate position
                const interpX = lerp(lastPoint.x, currentPoint.x, t);
                const interpY = lerp(lastPoint.y, currentPoint.y, t);

                // Interpolate timestamp for smooth fading
                const interpTime = lerp(lastPoint.createdAt, currentPoint.createdAt, t);
                const age = currentTime - interpTime;

                // Calculate opacity based on interpolated age
                const opacity = Math.max(0, Math.pow(1 - age / FADE_DURATION, 1.5) * 0.8);

                if (opacity <= 0) continue; // Skip faded segments

                ctx.strokeStyle = `rgba(${LINE_COLOR_RGB}, ${opacity})`;

                ctx.beginPath();
                // Draw from the *previous* interpolated/original point to the current one
                // For the first segment (j=1), this uses lastPoint. For others, it uses the previous interp point.
                // We simplify by always drawing tiny segments. Could optimize later if needed.
                const prevX = lerp(lastPoint.x, currentPoint.x, (j - 1) / segments);
                const prevY = lerp(lastPoint.y, currentPoint.y, (j - 1) / segments);

                ctx.moveTo(prevX, prevY);
                ctx.lineTo(interpX, interpY);
                ctx.stroke();
            }
            lastPoint = currentPoint; // Move to the next actual captured point
        }
    }, []);


    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const currentTime = Date.now();

        // Filter points by age first
        pointsRef.current = pointsRef.current.filter(
            (point) => currentTime - point.createdAt < FADE_DURATION
        );

        if (ctx) {
            drawTrail(ctx, pointsRef.current, currentTime);
        }

        animationFrameIdRef.current = requestAnimationFrame(animate);
    }, [drawTrail]);

    const handleMouseMove = useCallback((e) => {
        const newPoint = { x: e.clientX, y: e.clientY, createdAt: Date.now() };

        // --- Interpolation on Add (Alternative/Simpler but less smooth visually) ---
        // You could add interpolation here instead of in drawTrail, but it often looks less smooth.
        // Keeping it in drawTrail ensures consistent segment drawing each frame.

        pointsRef.current.push(newPoint);

    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const resizeCanvas = () => {
          if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        animationFrameIdRef.current = requestAnimationFrame(animate);

        return () => {
          window.removeEventListener('resize', resizeCanvas);
          window.removeEventListener('mousemove', handleMouseMove);
          if (animationFrameIdRef.current) {
            cancelAnimationFrame(animationFrameIdRef.current);
          }
        };
      }, [handleMouseMove, animate]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 pointer-events-none"
            style={{ zIndex: 9999 }}
        />
    );
}

export default CursorTrail;