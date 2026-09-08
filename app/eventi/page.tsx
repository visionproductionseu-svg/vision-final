import Link from "next/link";
import styles from "./Eventi.module.css";

const eventTypes = [
  {
    number: "01",
    title: "Corporate Events",
    text: "Eventi aziendali, convention, meeting e presentazioni costruiti per comunicare il brand.",
  },
  {
    number: "02",
    title: "Launch & Product",
    text: "Lanci prodotto ed esperienze immersive che trasformano una presentazione in un momento memorabile.",
  },
  {
    number: "03",
    title: "Brand Experience",
    text: "Concept, scenografia e contenuti pensati per creare una connessione reale tra brand e pubblico.",
  },
  {
    number: "04",
    title: "Sport & Racing",
    text: "Produzioni dinamiche per racing, sport, automotive e tutti gli eventi ad alta energia.",
  },
  {
    number: "05",
    title: "Private Events",
    text: "Eventi esclusivi, celebrazioni e occasioni speciali con una direzione creativa su misura.",
  },
  {
    number: "06",
    title: "Live Production",
    text: "Regia, coordinamento tecnico e produzione per portare l'idea dal concept al momento live.",
  },
];

const process = [
  {
    number: "01",
    title: "Concept",
    text: "Definiamo idea, obiettivo, pubblico e identità dell'evento.",
  },
  {
    number: "02",
    title: "Creative Direction",
    text: "Costruiamo il linguaggio visivo, la scenografia e l'esperienza.",
  },
  {
    number: "03",
    title: "Planning",
    text: "Organizziamo timeline, fornitori, contenuti e produzione.",
  },
  {
    number: "04",
    title: "Production",
    text: "Coordiniamo ogni elemento per trasformare il concept in realtà.",
  },
  {
    number: "05",
    title: "Live",
    text: "Gestiamo il momento dell'evento con precisione e controllo.",
  },
  {
    number: "06",
    title: "Content",
    text: "Trasformiamo l'evento in contenuti che continuano a vivere online.",
  },
];

const contentItems = [
  "Aftermovie",
  "Social Reels",
  "Photo & Video",
  "Interviews",
  "Motion Graphics",
  "Behind the Scenes",
];

export default function EventiPage() {
  return (
    <main className={styles.page}>
      <div className={styles.background} aria-hidden="true" />

      {/* NAVBAR */}
      <header className={styles.navbar}>
        <div className={styles.navbarInner}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="Alfa Creative Agency"
          >
            <img
              src="/assets/images/alfa-logo-horizontal.png"
              alt="Alfa Creative Agency"
            />
          </Link>

          <nav className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>

            <Link href="/eventi" className={`${styles.navLink} ${styles.active}`}>
              Eventi
            </Link>

            <Link href="/web-digital" className={styles.navLink}>
              Web &amp; Digital
            </Link>

            <Link href="/#fotografia" className={styles.navLink}>
              Video &amp; Creative
            </Link>

            <Link href="/#chi-siamo" className={styles.navLink}>
              Chi siamo
            </Link>
          </nav>

          <Link href="#contatti" className={styles.navButton}>
            Parliamo
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>
              <i />
              EVENT PRODUCTION · CREATIVE STUDIO
            </div>

            <h1>
              Creiamo
              <br />
              <span>esperienze.</span>
              <br />
              Produciamo
              <br />
              <span>momenti.</span>
            </h1>

            <p>
              Dall'idea al live, trasformiamo eventi e brand experience in
              produzioni capaci di lasciare il segno.
            </p>

            <div className={styles.heroActions}>
              <Link href="#contatti" className={styles.primaryButton}>
                Parliamo del progetto <span>→</span>
              </Link>

              <Link href="#servizi" className={styles.secondaryButton}>
                Scopri cosa facciamo <span>↓</span>
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.heroOrb} />
            <div className={`${styles.heroRing} ${styles.heroRingOne}`} />
<div className={`${styles.heroRing} ${styles.heroRingTwo}`} />
<div className={`${styles.heroRing} ${styles.heroRingThree}`} />
            <div className={styles.heroCore}>
              <span>LIVE</span>
              <strong>01</strong>
              <small>EVENT / EXPERIENCE</small>
            </div>

            <div className={`${styles.heroLabel} ${styles.heroLabelTop}`}>
              EVENT
            </div>

            <div className={`${styles.heroLabel} ${styles.heroLabelBottom}`}>
              EXPERIENCE
            </div>
          </div>
        </div>

        <div className={styles.heroScroll}>
          <span>SCROLL TO EXPLORE</span>
          <i />
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.sectionEyebrow}>
          <span>01</span>
          EVENT PRODUCTION
        </div>

        <div className={styles.introGrid}>
          <h2>
            Un evento non è
            <br />
            <span>solo un evento.</span>
          </h2>

          <div className={styles.introText}>
            <p>
              È uno spazio in cui un brand incontra le persone. Per questo
              lavoriamo tra creatività, produzione e tecnologia per costruire
              esperienze coerenti, spettacolari e realmente memorabili.
            </p>

            <p>
              Pensiamo al concept, alla produzione e ai contenuti come un
              unico progetto.
            </p>
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className={styles.services} id="servizi">
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionEyebrow}>
              <span>02</span>
              COSA FACCIAMO
            </div>

            <h2>
              Eventi pensati
              <br />
              <span>per essere vissuti.</span>
            </h2>
          </div>

          <p>
            Ogni produzione nasce da un obiettivo diverso. La nostra missione
            è trasformarlo in un'esperienza che il pubblico ricorda.
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {eventTypes.map((item) => (
            <article className={styles.serviceCard} key={item.number}>
              <span className={styles.cardNumber}>{item.number}</span>

              <div className={styles.cardArrow}>↗</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className={styles.cardLine} />
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div className={styles.sectionEyebrow}>
          <span>03</span>
          DALL'IDEA AL LIVE
        </div>

        <div className={styles.processHeader}>
          <h2>
            Sei fasi.
            <br />
            <span>Un'unica visione.</span>
          </h2>

          <p>
            Un processo chiaro ci permette di mantenere controllo creativo e
            operativo dall'inizio alla fine.
          </p>
        </div>

        <div className={styles.processGrid}>
          {process.map((item) => (
            <article className={styles.processItem} key={item.number}>
              <span>{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EVENT CONTENT */}
      <section className={styles.contentSection}>
        <div className={styles.contentVisual} aria-hidden="true">
          <div className={styles.contentFrame}>
            <div className={styles.contentFrameTop}>
              <span>CONTENT SYSTEM</span>
              <span>REC / LIVE</span>
            </div>

            <div className={styles.contentScreen}>
              <div className={styles.screenCross} />
              <div className={styles.screenCircle} />
              <span>01:24:08</span>
            </div>

            <div className={styles.contentFrameBottom}>
              <span>ALFA CREATIVE</span>
              <span>EVENT / 2026</span>
            </div>
          </div>
        </div>

        <div className={styles.contentCopy}>
          <div className={styles.sectionEyebrow}>
            <span>04</span>
            EVENT CONTENT
          </div>

          <h2>
            L'evento finisce.
            <br />
            <span>Il contenuto resta.</span>
          </h2>

          <p>
            Produciamo contenuti durante l'evento per amplificarne la portata
            prima, durante e dopo il live.
          </p>

          <div className={styles.contentList}>
            {contentItems.map((item, index) => (
              <div className={styles.contentListItem} key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className={styles.impact}>
        <div className={styles.impactCopy}>
          <div className={styles.sectionEyebrow}>
            <span>05</span>
            EXPERIENCE / IMPACT
          </div>

          <h2>
            Non produciamo
            <br />
            <span>solo eventi.</span>
          </h2>

          <p>
            Costruiamo momenti capaci di generare attenzione, emozione e
            contenuti. Perché una grande esperienza continua a vivere anche
            quando le luci si spengono.
          </p>
        </div>

        <div className={styles.impactVisual} aria-hidden="true">
          <div className={styles.impactCircle}>
            <div className={styles.impactCircleInner}>
              <span>360°</span>
              <small>EXPERIENCE</small>
            </div>
          </div>

          <div
            className={`${styles.impactLine} ${styles.impactLineOne}`}
          />
          <div
            className={`${styles.impactLine} ${styles.impactLineTwo}`}
          />
          <div
            className={`${styles.impactLine} ${styles.impactLineThree}`}
          />
        </div>

        <div className={styles.metrics}>
          <div>
            <strong>360°</strong>
            <span>Creative Vision</span>
          </div>

          <div>
            <strong>01</strong>
            <span>Integrated Team</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Possibilities</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Production Mindset</span>
          </div>
        </div>
      </section>

      {/* CASE */}
      <section className={styles.caseSection}>
        <div className={styles.sectionEyebrow}>
          <span>06</span>
          SELECTED CASE
        </div>

        <div className={styles.caseHeader}>
          <div>
            <h2>
              Toscano
              <br />
              <span>Racing.</span>
            </h2>

            <p>
              Motorsport, energia e contenuti. Un progetto in cui evento,
              video e storytelling lavorano insieme.
            </p>
          </div>

          <span className={styles.caseMeta}>
            CASE 01 · SPORT / AUTOMOTIVE
          </span>
        </div>

        <a
          className={styles.caseVideo}
          href="https://www.youtube.com/watch?v=5Pzb9tCqKgA"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://img.youtube.com/vi/5Pzb9tCqKgA/maxresdefault.jpg"
            alt="Toscano Racing"
          />

          <div className={styles.videoOverlay}>
            <div className={styles.playButton}>▶</div>
            <span>WATCH CASE</span>
          </div>
        </a>
      </section>

      {/* CTA */}
      <section className={styles.finalCta} id="contatti">
        <div className={styles.ctaOrb} aria-hidden="true" />

        <div className={styles.sectionEyebrow}>
          <span>07</span>
          READY WHEN YOU ARE
        </div>

        <h2>
          Il prossimo evento
          <br />
          <span>potrebbe essere il tuo.</span>
        </h2>

        <p>
          Raccontaci cosa vuoi creare. Partiamo dall'idea e costruiamo
          l'esperienza.
        </p>

        <form
          className={styles.contactForm}
          action="https://formsubmit.co/contact@alfacreative.eu"
          method="POST"
        >
          <input
            type="hidden"
            name="_next"
            value="https://alfacreative.eu/grazie"
          />

          <input type="hidden" name="_captcha" value="false" />

          <input
            type="hidden"
            name="_subject"
            value="Nuova richiesta evento — Alfa Creative Agency"
          />

          <div className={styles.contactFormRow}>
            <label className={styles.formField}>
              <span>Nome</span>
              <input
                type="text"
                name="name"
                placeholder="Il tuo nome"
                required
              />
            </label>

            <label className={styles.formField}>
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                placeholder="La tua e-mail"
                required
              />
            </label>
          </div>

          <div className={styles.contactFormRow}>
            <label className={styles.formField}>
              <span>Azienda</span>
              <input
                type="text"
                name="company"
                placeholder="Nome azienda"
              />
            </label>

            <label className={styles.formField}>
              <span>Tipo di evento</span>
              <select name="event_type" defaultValue="">
                <option value="" disabled>
                  Seleziona
                </option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Launch / Product">Launch / Product</option>
                <option value="Brand Experience">Brand Experience</option>
                <option value="Sport / Racing">Sport / Racing</option>
                <option value="Private Event">Private Event</option>
                <option value="Live Production">Live Production</option>
              </select>
            </label>
          </div>

          <div className={styles.contactFormRow}>
            <label className={styles.formField}>
              <span>Data evento</span>
              <input type="text" name="event_date" placeholder="Es. Ottobre 2026" />
            </label>

            <label className={styles.formField}>
              <span>Location</span>
              <input
                type="text"
                name="location"
                placeholder="Città / Location"
              />
            </label>
          </div>

          <label className={styles.formField}>
            <span>Messaggio</span>
            <textarea
              name="message"
              placeholder="Raccontaci brevemente il tuo progetto..."
              required
            />
          </label>

          <label className={styles.formConsent}>
            <input type="checkbox" name="consent" required />
            <span>
              Accetto di essere ricontattato da Alfa Creative Agency in
              relazione alla mia richiesta.
            </span>
          </label>

          <button type="submit" className={styles.submitButton}>
            Invia richiesta <span>→</span>
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Link href="/" className={styles.footerLogo}>
            <img
              src="/assets/images/alfa-logo-horizontal.png"
              alt="Alfa Creative Agency"
            />
          </Link>

          <span>EVENT PRODUCTION · CREATIVE STUDIO</span>

          <Link href="/" className={styles.footerBack}>
            Torna alla home ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}