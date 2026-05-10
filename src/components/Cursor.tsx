import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    document.documentElement.classList.add("has-cursor");
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", move);

    const enter = () => ringRef.current?.style.setProperty("transform", `translate(-50%,-50%) scale(1.6)`);
    const leave = () => ringRef.current?.style.setProperty("transform", `translate(-50%,-50%) scale(1)`);
    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach(t => { t.addEventListener("mouseenter", enter); t.addEventListener("mouseleave", leave); });

    let raf = 0;
    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      if (ringRef.current) ringRef.current.style.left = `${rx}px`, ringRef.current.style.top = `${ry}px`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      targets.forEach(t => { t.removeEventListener("mouseenter", enter); t.removeEventListener("mouseleave", leave); });
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[200] h-1 w-1 rounded-full bg-[var(--rouge)] mix-blend-difference" />
      <div ref={ringRef} className="pointer-events-none fixed z-[200] h-10 w-10 rounded-full border border-[var(--gold)]/60 transition-transform duration-300 ease-out" style={{ transform: "translate(-50%,-50%)" }} />
    </>
  );
}
