import { type ReactNode, useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Loader } from "./Loader";
import { SmoothScroll } from "./SmoothScroll";
import { Cursor } from "./Cursor";

export function Layout({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("mdc-loaded")) setLoaded(true);
  }, []);

  return (
    <div className="grain min-h-screen bg-[var(--ivory)] text-[var(--noir)]">
      <SmoothScroll />
      <Cursor />
      {!loaded && (
        <Loader
          onDone={() => {
            sessionStorage.setItem("mdc-loaded", "1");
            setLoaded(true);
          }}
        />
      )}
      <Nav />
      <main className={`transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
