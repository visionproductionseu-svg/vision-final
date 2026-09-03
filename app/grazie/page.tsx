export default function GraziePage() {
  return (
    <main className="thank-you-page">
      <div className="container">
        <div className="glass-liquid thank-you-panel">
          <div className="cta-glow" aria-hidden="true"></div>

          <div className="thank-you-content">
            <span className="eyebrow">Alfa Creative Agency</span>

            <div className="thank-you-icon" aria-hidden="true">
              ✓
            </div>

            <h1>
              Grazie!
            </h1>

            <p>
              La tua richiesta è stata inviata correttamente.
              <br />
              Ti ricontatteremo al più presto.
            </p>

            <a href="/" className="btn btn-primary">
              Torna al sito
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}