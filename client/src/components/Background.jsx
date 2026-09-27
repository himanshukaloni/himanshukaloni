import { useEffect, useRef } from "react";

export default function Background({ theme }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 1.7);
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const resize = () => {
      w = window.innerWidth;
      h = document.documentElement.scrollHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.7);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const move = (event) => {
      pointer.tx = event.clientX;
      pointer.ty = event.clientY + window.scrollY;
    };
    const leave = () => { pointer.tx = -9999; pointer.ty = -9999; };

    const draw = (time) => {
      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;
      ctx.clearRect(0, 0, w, h);

      const isLight = theme === "light";
      const base = isLight ? "rgba(40,35,28,0.075)" : "rgba(255,247,232,0.075)";
      const hot = isLight ? "rgba(178,104,31,0.24)" : "rgba(255,145,48,0.42)";
      const gap = 42;
      const radius = 1.15;
      const top = Math.max(0, Math.floor(window.scrollY / gap) * gap - gap * 2);
      const bottom = Math.min(h, top + window.innerHeight + gap * 5);

      for (let y = top; y < bottom; y += gap) {
        for (let x = 0; x < w; x += gap) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - dist / 180);
          const pulse = 0.78 + Math.sin(time * 0.0012 + x * 0.012 + y * 0.008) * 0.12;
          ctx.beginPath();
          ctx.fillStyle = influence > 0 ? hot : base;
          ctx.globalAlpha = Math.min(1, (0.6 + influence * 0.75) * pulse);
          ctx.arc(x + dx * influence * -0.04, y + dy * influence * -0.04, radius + influence * 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // Warm ambient glows keep the background cinematic without using a photo.
      const glow = ctx.createRadialGradient(w * 0.78, h * 0.18, 0, w * 0.78, h * 0.18, Math.min(w, 600));
      glow.addColorStop(0, isLight ? "rgba(194,113,35,0.08)" : "rgba(255,128,35,0.11)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, [theme]);

  return <canvas ref={ref} className="dot-grid" aria-hidden="true" />;
}
