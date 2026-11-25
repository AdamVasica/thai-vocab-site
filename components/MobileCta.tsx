"use client";
import { useEffect, useState } from "react";
import { Logo, AppleIcon } from "./icons";

// Phones only (CSS hides it above 760px): a slim download bar that slides up once the hero's
// App Store button has scrolled away, and hides again when the closing App Store button is on screen.
export function MobileCta({ url, name, tagline }: { url: string | null; name: string; tagline: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.querySelector(".hero .store-btn");
    const close = document.querySelector(".close .store-btn");
    if (!hero || !close) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const heroAway = hero.getBoundingClientRect().bottom < 0;
      const closeVisible = close.getBoundingClientRect().top < window.innerHeight;
      setShow(heroAway && !closeVisible);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);
  if (!url) return null;
  return (
    <div className={`mcta${show ? " on" : ""}`} aria-hidden={!show}>
      <span className="mcta-logo"><Logo /></span>
      <span className="mcta-txt"><b>{name}</b><small>{tagline}</small></span>
      <a className="mcta-btn" href={url} rel="noopener" tabIndex={show ? 0 : -1}><AppleIcon />Get the app</a>
    </div>
  );
}
