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
  }, []);

  return null;
}
