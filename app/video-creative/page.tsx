import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./VideoCreative.module.css";

export default function VideoCreativePage() {
  return (
    <>
      <Navbar active="video-creative" />

      <main className={styles.page}>

        {/* HERO */}
        <section className={styles.videoHero}>
          <div className={styles.videoHeroContent}>
            <div className={styles.eyebrow}>
              <span />
              VIDEO · MOTION · CREATIVE
            </div>

            <h1>
              Immagini che
              <br />
              <span>raccontano.</span>
            </h1>

            <p>
              Produciamo video, immagini e contenuti creativi che trasformano
              idee e brand in esperienze visive capaci di lasciare il segno.
            </p>

            <div className={styles.heroActions}>
              <Link href="#servizi" className={styles.primaryButton}>
                Scopri cosa facciamo <span>↓</span>
              </Link>

              <Link href="#portfolio" className={styles.secondaryButton}>
                Guarda i nostri lavori <span>↗</span>
              </Link>
            </div>
          </div>

          <div className={styles.videoHeroVisual} aria-hidden="true">
            <div className={styles.visualGlow} />
            <div
              className={`${styles.visualRing} ${styles.visualRingOne}`}
            />
            <div
              className={`${styles.visualRing} ${styles.visualRingTwo}`}
            />

            <div className={styles.visualCore}>
              <span>ALFA</span>
              <strong>PLAY</strong>
              <small>VIDEO / CREATIVE</small>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className={styles.videoIntro}>
          <div className={styles.sectionEyebrow}>
            <span>01</span>
            VIDEO & CREATIVE
          </div>

          <div className={styles.introGrid}>
            <h2>
              Non creiamo
              <br />
              <span>solo immagini.</span>
            </h2>

            <div className={styles.introText}>
              <p>
                Creiamo linguaggi visivi capaci di dare forma a un'identità,
                raccontare una storia e far vivere un brand attraverso
                immagini, movimento e contenuti.
              </p>

              <p>
                Dalla produzione video alla fotografia, dal motion design al
                creative content, costruiamo ogni progetto con una visione
                unica.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className={styles.videoServices} id="servizi">
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionEyebrow}>
                <span>02</span>
                COSA FACCIAMO
              </div>

              <h2>
                Creatività in
                <br />
                <span>movimento.</span>
              </h2>
            </div>

            <p>
              Ogni contenuto nasce da un'idea. Noi trasformiamo quell'idea in
              immagini, ritmo e una direzione creativa riconoscibile.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            <article className={styles.serviceCard}>
              <span className={styles.cardNumber}>01</span>
              <div className={styles.cardArrow}>↗</div>

              <h3>Video Production</h3>

              <p>
                Corporate video, campagne, branded content, eventi e
                produzioni pensate per raccontare il brand con forza e
                autenticità.
              </p>

              <div className={styles.cardLine} />
            </article>

            <article className={styles.serviceCard}>
              <span className={styles.cardNumber}>02</span>
              <div className={styles.cardArrow}>↗</div>

              <h3>Motion Design</h3>

              <p>
                Animazione, 2D, 3D e visual graphics per trasformare concetti
                complessi in comunicazioni dinamiche e memorabili.
              </p>

              <div className={styles.cardLine} />
            </article>

            <article className={styles.serviceCard}>
              <span className={styles.cardNumber}>03</span>
              <div className={styles.cardArrow}>↗</div>

              <h3>Fotografia</h3>

              <p>
                Portrait, lifestyle, prodotto e reportage per costruire un
                universo visivo coerente con l'identità del brand.
              </p>

              <div className={styles.cardLine} />
            </article>

            <article className={styles.serviceCard}>
              <span className={styles.cardNumber}>04</span>
              <div className={styles.cardArrow}>↗</div>

              <h3>Creative Content</h3>

              <p>
                Contenuti pensati per social, campagne e piattaforme digitali,
                progettati per attirare attenzione e generare connessione.
              </p>

              <div className={styles.cardLine} />
            </article>
          </div>
        </section>

        {/* GALLERY */}
        <section className={styles.creativeGallery}>
          <div className={styles.sectionEyebrow}>
            <span>03</span>
            VISUAL STORIES
          </div>

          <div className={styles.galleryHeader}>
            <h2>
              Ogni progetto
              <br />
              <span>ha una storia.</span>
            </h2>

            <p>
              Immagini, persone, movimento e atmosfera. Costruiamo contenuti
              che non si limitano a mostrare, ma fanno percepire.
            </p>
          </div>

          <div className={styles.galleryGrid}>
            <div
              className={`${styles.galleryCard} ${styles.galleryCardLarge}`}
            >
              <img
                src="/assets/images/photo-couple-kiss.webp"
                alt="Creative production"
              />

              <div className={styles.galleryOverlay}>
                <span>CREATIVE CONTENT</span>
                <strong>Storytelling visivo</strong>
              </div>
            </div>

            <div className={styles.galleryCard}>
              <img
                src="/assets/images/photo-portrait-polo.webp"
                alt="Portrait photography"
              />

              <div className={styles.galleryOverlay}>
                <span>PHOTOGRAPHY</span>
                <strong>Portrait</strong>
              </div>
            </div>

            <div className={styles.galleryCard}>
              <img
                src="/assets/images/photo-couple-scarves.webp"
                alt="Lifestyle creative"
              />

              <div className={styles.galleryOverlay}>
                <span>BRAND CONTENT</span>
                <strong>Lifestyle</strong>
              </div>
            </div>

            <div
              className={`${styles.galleryCard} ${styles.galleryCardLarge}`}
            >
              <img
                src="/assets/images/photo-portrait-courtyard.webp"
                alt="Creative portrait"
              />

              <div className={styles.galleryOverlay}>
                <span>VISUAL IDENTITY</span>
                <strong>Creative portrait</strong>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className={styles.videoPortfolio} id="portfolio">
          <div className={styles.sectionEyebrow}>
            <span>04</span>
            SELECTED WORK
          </div>

          <div className={styles.portfolioHeader}>
            <h2>
              I nostri
              <br />
              <span>lavori.</span>
            </h2>

            <p>
              Una selezione di progetti in cui strategia, produzione e
              creatività lavorano insieme.
            </p>
          </div>

          <div className={styles.portfolioGrid}>
            <a
              href="https://www.youtube.com/watch?v=5Pzb9tCqKgA"
              target="_blank"
              rel="noreferrer"
              className={styles.portfolioCard}
            >
              <img
                src="https://img.youtube.com/vi/5Pzb9tCqKgA/maxresdefault.jpg"
                alt="Toscano Racing"
              />

              <div className={styles.portfolioOverlay}>
                <span>VIDEO PRODUCTION</span>
                <strong>Toscano Racing</strong>
                <i>↗</i>
              </div>
            </a>

            <a
              href="https://www.youtube.com/watch?v=Z3ZLQJeUPEE"
              target="_blank"
              rel="noreferrer"
              className={styles.portfolioCard}
            >
              <img
                src="https://img.youtube.com/vi/Z3ZLQJeUPEE/maxresdefault.jpg"
                alt="Coliseu"
              />

              <div className={styles.portfolioOverlay}>
                <span>CGI · CREATIVE</span>
                <strong>Coliseu</strong>
                <i>↗</i>
              </div>
            </a>

            <a
              href="https://www.youtube.com/watch?v=-wGUnMmAhQY"
              target="_blank"
              rel="noreferrer"
              className={styles.portfolioCard}
            >
              <img
                src="https://img.youtube.com/vi/-wGUnMmAhQY/maxresdefault.jpg"
                alt="ACP"
              />

              <div className={styles.portfolioOverlay}>
                <span>MOTION DESIGN</span>
                <strong>ACP</strong>
                <i>↗</i>
              </div>
            </a>
          </div>
        </section>

        {/* PROCESS */}
        <section className={styles.creativeProcess}>
          <div className={styles.sectionEyebrow}>
            <span>05</span>
            IL NOSTRO PROCESSO
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processIntro}>
              <h2>
                Dall'idea
                <br />
                <span>all'immagine.</span>
              </h2>

              <p>
                Un processo creativo chiaro ci permette di trasformare una
                visione in un contenuto capace di comunicare davvero.
              </p>
            </div>

            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <span>01</span>
                <div>
                  <h3>Concept</h3>
                  <p>
                    Definiamo idea, obiettivo, tono e direzione creativa.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <span>02</span>
                <div>
                  <h3>Production</h3>
                  <p>
                    Produciamo immagini, video e contenuti con cura tecnica e
                    creativa.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <span>03</span>
                <div>
                  <h3>Post Production</h3>
                  <p>
                    Editing, color, sound design, motion e finalizzazione.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <span>04</span>
                <div>
                  <h3>Delivery</h3>
                  <p>
                    Consegniamo contenuti pronti per vivere su ogni
                    piattaforma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.videoCta} id="contatti">
          <div className={styles.ctaGlow} aria-hidden="true" />

          <div className={styles.sectionEyebrow}>
            <span>06</span>
            LET'S CREATE
          </div>

          <h2>
            Hai una storia
            <br />
            <span>da raccontare?</span>
          </h2>

          <p>
            Raccontaci la tua idea. Costruiamo insieme il modo migliore per
            trasformarla in immagini.
          </p>

          <a
            href="mailto:contact@alfacreative.eu"
            className={styles.primaryButton}
          >
            Parliamo del progetto <span>→</span>
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}