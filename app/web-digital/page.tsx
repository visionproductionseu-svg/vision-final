import Link from "next/link";
import styles from "./WebDigital.module.css";

const services = [
  {
    number: "01",
    title: "Web Design",
    text: "Interfaces modernas, premium e coerentes com o seu brand, projetadas para guiar o usuário até a ação.",
    code: "interface.design()",
  },
  {
    number: "02",
    title: "Sviluppo Web",
    text: "Siti veloci, responsive e solidi, sviluppati con tecnologie moderne e pensati per crescere nel tempo.",
    code: "website.build({fast:true})",
  },
  {
    number: "03",
    title: "Landing Pages",
    text: "Pagine ad alta conversione per campagne, servizi, prodotti e lead generation.",
    code: "landing.convert()",
  },
  {
    number: "04",
    title: "SEO",
    text: "Struttura, contenuti e performance ottimizzati per aumentare la visibilità organica su Google.",
    code: "search.optimize()",
  },
  {
    number: "05",
    title: "UX / UI",
    text: "Architetture semplici e percorsi intuitivi per rendere ogni interazione più chiara e naturale.",
    code: "experience.refine()",
  },
  {
    number: "06",
    title: "Performance",
    text: "Ottimizziamo velocità, mobile experience e qualità tecnica per una presenza digitale più efficace.",
    code: "performance.maximize()",
  },
];

const process = [
  ["01", "Discovery", "Obiettivi, pubblico, mercato e posizionamento."],
  ["02", "Strategy", "Struttura, contenuti e direzione digitale."],
  ["03", "Design", "UX/UI, identità visiva e prototipazione."],
  ["04", "Development", "Sviluppo responsive, integrazioni e contenuti."],
  ["05", "SEO", "Ottimizzazione tecnica e struttura per la ricerca."],
  ["06", "Launch", "Pubblicazione, misurazione e miglioramento continuo."],
];

export default function WebDigitalPage() {
  return (
    <div className={styles.page}>
      <div className={styles.ambient} aria-hidden="true">
        <div className={styles.grid} />
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
        <div className={styles.scanline} />
      </div>

      <header className={styles.navbar}>
        <div className={styles.navInner}>
          <Link
            href="/"
            className={styles.logo}
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

  <Link href="/eventi" className={styles.navLink}>
    Eventi
  </Link>

  <Link
    href="/web-digital"
    className={`${styles.navLink} ${styles.active}`}
  >
    Web &amp; Digital
  </Link>

  <Link href="/#fotografia" className={styles.navLink}>
    Video &amp; Creative
  </Link>

  <Link href="/#chi-siamo" className={styles.navLink}>
    Chi siamo
  </Link>
</nav>

          <Link href="/#cta" className={styles.navButton}>
            Parliamo <span>↗</span>
          </Link>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}>
                <i />
                WEB & DIGITAL
              </div>

              <h1>
                Il tuo sito non deve
                <span>solo esistere.</span>
                Deve <em>lavorare per te.</em>
              </h1>

              <p className={styles.heroLead}>
                Progettiamo esperienze digitali che uniscono design,
                tecnologia, SEO e strategia per trasformare la tua presenza
                online in uno strumento concreto di crescita.
              </p>

              <div className={styles.heroActions}>
                <Link href="/#cta" className={styles.primaryButton}>
                  Inizia il tuo progetto <span>→</span>
                </Link>

                <a
                  href="#servizi-digital"
                  className={styles.secondaryButton}
                >
                  Scopri cosa facciamo
                </a>
              </div>

              <div className={styles.heroStats}>
                <div>
                  <strong>01</strong>
                  <span>partner digitale</span>
                </div>

                <div>
                  <strong>360°</strong>
                  <span>visione strategica</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>possibilità di evoluzione</span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.visualFrame}>
                <div className={styles.frameTop}>
                  <span>ALFA / DIGITAL SYSTEM</span>
                  <span>
                    <b /> ONLINE
                  </span>
                </div>

                <div className={styles.browser}>
                  <div className={styles.browserBar}>
                    <span />
                    <span />
                    <span />
                    <label>yourbrand.com</label>
                  </div>

                  <div className={styles.browserBody}>
                    <div className={styles.browserNav}>
                      <strong>BRAND</strong>
                      <i />
                      <i />
                      <i />
                    </div>

                    <div className={styles.browserHero}>
                      <small>YOUR DIGITAL PRESENCE</small>

                      <div>
                        MAKE
                        <br />
                        <span>IT MATTER.</span>
                      </div>

                      <div className={styles.fakeButton}>
                        EXPLORE →
                      </div>
                    </div>

                    <div className={styles.browserCards}>
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>

                <div className={`${styles.hud} ${styles.hudLeft}`}>
                  <small>PERFORMANCE</small>
                  <strong>
                    98<span>%</span>
                  </strong>
                  <i />
                </div>

                <div className={`${styles.hud} ${styles.hudRight}`}>
                  <small>SEO / INDEX</small>
                  <strong>OPTIMIZED</strong>
                  <span>● LIVE</span>
                </div>

                <div className={styles.codeBlock}>
                  <span>01</span> strategy.define(
                  <b>growth</b>);<br />
                  <span>02</span> experience.optimize(
                  <b>conversion</b>);<br />
                  <span>03</span> website.launch(
                  <b>worldwide</b>);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.intro} id="servizi-digital">
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>
              <i />
              APPROCCIO
            </div>

            <h2>
              Non partiamo dal design.
              <br />
              <span>Partiamo dal perché.</span>
            </h2>

            <p>
              Un buon sito non è quello che sembra bello. È quello che
              comunica bene, viene trovato, carica velocemente e porta le
              persone a fare il passo successivo.
            </p>
          </div>

          <div className={styles.principles}>
            <div className={styles.principle}>
              <span>01</span>
              <strong>Strategia</strong>
              <p>Ogni scelta nasce da un obiettivo.</p>
            </div>

            <div className={styles.principle}>
              <span>02</span>
              <strong>Esperienza</strong>
              <p>Ogni percorso deve essere semplice.</p>
            </div>

            <div className={styles.principle}>
              <span>03</span>
              <strong>Performance</strong>
              <p>Ogni secondo conta.</p>
            </div>

            <div className={styles.principle}>
              <span>04</span>
              <strong>Conversione</strong>
              <p>Ogni visita può diventare opportunità.</p>
            </div>
          </div>
        </section>

        <section className={styles.services}>
          <div className={`${styles.sectionHead} ${styles.left}`}>
            <div className={styles.eyebrow}>
              <i />
              COSA FACCIAMO
            </div>

            <h2>
              Costruiamo il tuo
              <br />
              <span>ecosistema digitale.</span>
            </h2>

            <p>
              Dal primo wireframe alla crescita dopo il lancio, copriamo ogni
              fase del progetto.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article
                key={service.number}
                className={styles.serviceCard}
              >
                <div className={styles.serviceTop}>
                  <span>{service.number}</span>
                  <b>↗</b>
                </div>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>

                <code>{service.code}</code>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.performance}>
          <div className={styles.performancePanel}>
            <div className={styles.performanceCopy}>
              <div className={styles.eyebrow}>
                <i />
                DESIGN × TECHNOLOGY
              </div>

              <h2>
                Un sito bello è solo
                <br />
                <span>l'inizio.</span>
              </h2>

              <p>
                Design, sviluppo e marketing digitale devono parlare la stessa
                lingua. È così che trasformiamo un sito da semplice presenza
                online a infrastruttura per il business.
              </p>

              <div className={styles.checks}>
                <div>
                  <span>✓</span> Mobile first
                </div>
                <div>
                  <span>✓</span> SEO ready
                </div>
                <div>
                  <span>✓</span> Conversion focused
                </div>
                <div>
                  <span>✓</span> Performance oriented
                </div>
              </div>
            </div>

            <div className={styles.metrics}>
              <div className={styles.metricBig}>
                <small>USER EXPERIENCE</small>
                <strong>98</strong>
                <span>/ 100</span>

                <div className={styles.metricLine}>
                  <i />
                </div>
              </div>

              <div className={styles.metricRow}>
                <span>Performance</span>
                <b>98%</b>
              </div>

              <div className={styles.metricRow}>
                <span>Accessibility</span>
                <b>96%</b>
              </div>

              <div className={styles.metricRow}>
                <span>SEO</span>
                <b>100%</b>
              </div>

              <div className={styles.metricRow}>
                <span>Conversion</span>
                <b>↑</b>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.process}>
          <div className={styles.sectionHead}>
            <div className={styles.eyebrow}>
              <i />
              IL PROCESSO
            </div>

            <h2>
              Dall'idea al <span>lancio.</span>
            </h2>

            <p>
              Un processo chiaro, con una direzione precisa in ogni fase.
            </p>
          </div>

          <div className={styles.processGrid}>
            {process.map(([number, title, text]) => (
              <div key={number} className={styles.processCard}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <i />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.ctaOrb} aria-hidden="true" />

          <div className={styles.eyebrow}>
            <i />
            READY WHEN YOU ARE
          </div>

          <h2>
            Il prossimo progetto
            <br />
            <span>potrebbe essere il tuo.</span>
          </h2>

          <p>
            Raccontaci cosa vuoi costruire. Partiamo dalla strategia.
          </p>

          <Link href="/#cta" className={styles.primaryButton}>
            Parliamo del progetto <span>→</span>
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/" className={styles.footerLogo}>
          <img
            src="/assets/images/alfa-logo-horizontal.png"
            alt="Alfa Creative Agency"
          />
        </Link>

        <span>Strategy · Digital · Video · Creative</span>

        <Link href="/">← Torna al sito</Link>
      </footer>
    </div>
  );
}