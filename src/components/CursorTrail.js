import React, { useRef, useEffect } from 'react';

const MAX_POINTS = 40;    // longer trail for smoothness
const TRAIL_FADE = 100;   // ms fade

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points = pointsRef.current;

    const mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      points.push({ x: mouse.x, y: mouse.y, time: Date.now() });
      if (points.length > MAX_POINTS) points.shift();
    });

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (points.length < 2) {
        requestAnimationFrame(draw);
        return;
      }

      ctx.lineWidth = 2;
      ctx.strokeStyle = '#008F3A';
      ctx.beginPath();

      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const midX = (p0.x + p1.x) / 2;
        const midY = (p0.y + p1.y) / 2;
        ctx.quadraticCurveTo(p0.x, p0.y, midX, midY);
      }

      ctx.stroke();

      // Remove points that are too old
      const now = Date.now();
      while (points.length && now - points[0].time > TRAIL_FADE) points.shift();

      requestAnimationFrame(draw);
    }

    draw();

    return () => window.removeEventListener('mousemove', () => {});
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}
    />
  );
}
