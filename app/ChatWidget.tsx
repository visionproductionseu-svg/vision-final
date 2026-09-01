"use client";

import { useState } from "react";
import styles from "./ChatWidget.module.css";

const services = [
  "Video & Produzione",
  "CGI / 3D / VFX",
  "Riprese Aeree",
  "Fotografia",
  "Altro",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  function handleService(service: string) {
    setSelected(service);
  }

  function resetChat() {
    setSelected(null);
  }

  return (
    <div className={styles.wrapper}>
      {open && (
        <div className={styles.chat}>
          <div className={styles.header}>
            <div className={styles.headerIcon}>✦</div>

            <div>
              <strong>Vision Assistant</strong>
              <span>Alfa Creative Agency</span>
            </div>

            <button
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="Chiudi chat"
            >
              ×
            </button>
          </div>

          <div className={styles.messages}>
            {!selected ? (
              <>
                <div className={styles.message}>
                  <strong>Ciao! 👋</strong>
                  <br />
                  Come possiamo aiutarti con il tuo prossimo progetto?
                </div>

                <div className={styles.question}>
                  Che tipo di progetto hai in mente?
                </div>

                <div className={styles.options}>
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleService(service)}
                    >
                      {service}
                      <span>→</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className={styles.message}>
                  <strong>{selected}</strong>
                </div>

                <div className={styles.message}>
                  Perfetto. Raccontaci brevemente il tuo progetto e il nostro
                  team creativo ti aiuterà a trovare la soluzione migliore.
                </div>

                <a
                  href="#contatti"
                  className={styles.quote}
                  onClick={() => setOpen(false)}
                >
                  Richiedi un preventivo
                  <span>→</span>
                </a>

                <button className={styles.back} onClick={resetChat}>
                  ← Torna alle opzioni
                </button>
              </>
            )}
          </div>

          <div className={styles.footer}>
            Alfa Creative Agency
          </div>
        </div>
      )}

      <button
        className={styles.trigger}
        onClick={() => setOpen((value) => !value)}
        aria-label="Apri Vision Assistant"
      >
        <span className={styles.triggerGlow} />
        <span className={styles.robot}>✦</span>
      </button>
    </div>
  );
}