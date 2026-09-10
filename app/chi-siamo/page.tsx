import Navbar from "../components/Navbar";
import styles from "./ChiSiamo.module.css";
import Footer from "../components/Footer";

export default function ChiSiamo() {
  return (
    <div className={styles.page}>
      <Navbar active="chi-siamo" />
    
      <main>
        {/* =========================
            HERO
        ========================= */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>
                  Alfa Creative Agency
                </span>

                <h1>
                  Non siamo solo
                  <br />
                  <span>un&apos;agenzia.</span>
                </h1>

                <p className={styles.heroLead}>
                  Siamo un partner creativo capace di unire strategia,
                  digitale, produzione e creatività per costruire progetti
                  che hanno una direzione.
                </p>

                <a
                  href="/#cta"
                  className={styles.primaryButton}
                >
                  Parliamo del tuo progetto
                  <span>→</span>
                </a>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.glow} />
                <div
                  className={`${styles.orbit} ${styles.orbitOne}`}
                />
                <div
                  className={`${styles.orbit} ${styles.orbitTwo}`}
                />

                <div className={styles.visualCard}>
                  <span>ALFA / 360°</span>

                  <strong>
                    Strategy
                    <br />
                    Digital
                    <br />
                    Creative
                  </strong>

                  <small>One integrated vision.</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            IDENTITY
        ========================= */}
        <section className={styles.identity}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>
                Chi siamo
              </span>

              <h2>
                Una squadra creativa
                <span> per tutto il progetto.</span>
              </h2>
            </div>

            <div className={styles.identityGrid}>
              <div className={styles.identityText}>
                <p className={styles.largeText}>
                  Alfa Creative Agency nasce dall&apos;idea di unire
                  competenze diverse all&apos;interno di una stessa visione.
                </p>

                <p>
                  Marketing, digitale, produzione video e creatività non
                  devono lavorare separatamente. Quando strategia e
                  produzione seguono la stessa direzione, un progetto
                  diventa più chiaro, più coerente e più efficace.
                </p>

                <p>
                  Per questo lavoriamo come un unico partner: analizziamo,
                  progettiamo, sviluppiamo e produciamo ciò che serve per
                  raccontare e far crescere un brand.
                </p>
              </div>

              <div className={styles.identityPanel}>
                <span className={styles.panelNumber}>01</span>

                <span className={styles.panelLabel}>
                  La nostra idea
                </span>

                <h3>
                  Dalla strategia
                  <br />
                  alla realizzazione.
                </h3>

                <p>
                  Un processo integrato, senza frammentare il progetto tra
                  fornitori diversi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            PILLARS
        ========================= */}
        <section className={styles.pillars}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <span className={styles.eyebrow}>
                Le nostre competenze
              </span>

              <h2>
                Quattro aree.
                <span> Una sola direzione.</span>
              </h2>
            </div>

            <div className={styles.pillarGrid}>
              <article className={styles.pillar}>
                <span>01</span>
                <h3>Strategia</h3>
                <p>
                  Analizziamo obiettivi, pubblico, mercato e posizionamento
                  prima di definire la direzione del progetto.
                </p>
              </article>

              <article className={styles.pillar}>
                <span>02</span>
                <h3>Digital</h3>
                <p>
                  Siti web, SEO, Google Ads e marketing digitale progettati
                  per trasformare la presenza online in opportunità.
                </p>
              </article>

              <article className={styles.pillar}>
                <span>03</span>
                <h3>Produzione</h3>
                <p>
                  Video, fotografia, eventi e contenuti prodotti con una
                  visione creativa e una direzione precisa.
                </p>
              </article>

              <article className={styles.pillar}>
                <span>04</span>
                <h3>Creatività</h3>
                <p>
                  Concept, motion design, branding e contenuti pensati per
                  rendere il brand riconoscibile.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================
            FOUNDER
        ========================= */}
        <section className={styles.founder}>
          <div className={styles.container}>
            <div className={styles.founderGrid}>
              <div className={styles.founderImage}>
                <img
                  src="/assets/images/team-pedro-robot.webp"
                  alt="Pedro Brustolin, CEO & Founder di Alfa Creative Agency"
                />

                <div className={styles.imageLabel}>
                  <span>ALFA / PEOPLE</span>
                  <strong>Creative direction</strong>
                </div>
              </div>

              <div className={styles.founderCopy}>
                <span className={styles.eyebrow}>
                  Chi guida lo studio
                </span>

                <h2>
                  Pedro
                  <br />
                  <span>Brustolin.</span>
                </h2>

                <div className={styles.role}>
                  CEO & Founder
                  <span>Alfa Creative Agency</span>
                </div>

                <p>
                  Oltre 10 anni di esperienza nel settore audiovisivo e
                  creativo. Pedro segue personalmente i progetti chiave,
                  unendo visione creativa, produzione e sviluppo di nuove
                  soluzioni per i clienti.
                </p>

                <p>
                  L&apos;obiettivo è costruire un rapporto diretto con ogni
                  cliente e trasformare ogni progetto in qualcosa di
                  concreto, riconoscibile e utile al business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            MANIFESTO
        ========================= */}
        <section className={styles.manifesto}>
          <div className={styles.container}>
            <div className={styles.manifestoCard}>
              <span className={styles.eyebrow}>
                Il nostro approccio
              </span>

              <h2>
                “Strategia, creatività e tecnologia devono lavorare nella
                stessa direzione.”
              </h2>

              <p>
                È così che trasformiamo un&apos;idea in un progetto che
                conta.
              </p>

              <div className={styles.manifestoLine}>
                <span />
                Alfa Creative Agency
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            NUMBERS
        ========================= */}
        <section className={styles.numbers}>
          <div className={styles.container}>
            <div className={styles.numberGrid}>
              <div>
                <strong>360°</strong>
                <span>Visione completa</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Unico referente</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Aree di competenza</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Team integrato</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            CTA
        ========================= */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              <span className={styles.eyebrow}>
                Alfa Creative Agency
              </span>

              <h2>
                Hai un progetto?
                <br />
                <span>Costruiamolo insieme.</span>
              </h2>

              <p>
                Raccontaci cosa vuoi realizzare e iniziamo a costruire
                qualcosa che abbia una direzione.
              </p>

              <a
                href="/#cta"
                className={styles.primaryButton}
              >
                Iniziamo a parlare
                <span>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================= */}
      <Footer />
    </div>
  );
}