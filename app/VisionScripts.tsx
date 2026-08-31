"use client";

import { useEffect } from "react";

let visionPromise: Promise<void> | null = null;
let visionInitialized = false;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");

    script.src = src;
    script.async = false;

    script.onload = () => resolve();

    script.onerror = () => {
      reject(new Error(`Não foi possível carregar: ${src}`));
    };

    document.body.appendChild(script);
  });
}

function loadVision() {
  if (visionInitialized) {
    return Promise.resolve();
  }

  if (visionPromise) {
    return visionPromise;
  }

  visionPromise = (async () => {
    try {
      await loadScript("/js/vendor/three.min.js");
      await loadScript("/js/vendor/GLTFLoader.js");
      await loadScript("/js/main.js");

      document.dispatchEvent(new Event("DOMContentLoaded"));

      visionInitialized = true;
    } catch (error) {
      console.error("Erro ao carregar scripts do Vision:", error);
      visionPromise = null;
      throw error;
    }
  })();

  return visionPromise;
}

export default function VisionScripts() {
  useEffect(() => {
    loadVision();

    const youtubeCards =
      document.querySelectorAll<HTMLElement>(".proj-youtube");

    const handlers = new Map<HTMLElement, EventListener>();

    youtubeCards.forEach((card) => {
      const button =
        card.querySelector<HTMLButtonElement>(".youtube-play");

      const videoId = card.dataset.videoId;

      if (!button || !videoId) return;

      const handleClick: EventListener = () => {
        const iframe = document.createElement("iframe");

        iframe.src =
          `https://www.youtube.com/embed/${videoId}` +
          `?autoplay=1&rel=0&playsinline=1`;

        iframe.title = "Toscano Racing — Progetto 01";
        iframe.frameBorder = "0";

        iframe.allow =
          "autoplay; encrypted-media; picture-in-picture; fullscreen";

        iframe.allowFullscreen = true;

        iframe.setAttribute(
          "referrerpolicy",
          "strict-origin-when-cross-origin"
        );

        card.innerHTML = "";
        card.appendChild(iframe);
        card.classList.add("is-playing");
      };

      button.addEventListener("click", handleClick);
      handlers.set(button, handleClick);
    });

    return () => {
      handlers.forEach((handler, button) => {
        button.removeEventListener("click", handler);
      });
    };
  }, []);

  return null;
}