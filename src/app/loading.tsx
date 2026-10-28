export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading Kerala Learning Hub"
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "var(--paper, #f7f7f2)",
        color: "var(--ink, #172c25)",
      }}
    >
      <section style={{ width: "min(100%, 420px)", textAlign: "center" }}>
        <div
          aria-hidden="true"
          style={{
            width: 44,
            height: 44,
            margin: "0 auto 18px",
            border: "4px solid #dce9df",
            borderTopColor: "var(--green, #176b4d)",
            borderRadius: "50%",
            animation: "klh-spin 0.8s linear infinite",
          }}
        />
        <h1 style={{ margin: "0 0 8px", fontSize: "1.2rem" }}>Getting your study space ready</h1>
        <p style={{ margin: 0, color: "var(--muted, #6e7d75)", lineHeight: 1.6 }}>
          Your learning tools will appear in a moment.
        </p>
        <style>{`@keyframes klh-spin { to { transform: rotate(360deg); } } @media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; } }`}</style>
      </section>
    </main>
  );
}
