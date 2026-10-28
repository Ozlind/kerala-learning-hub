"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      role="alert"
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "var(--paper, #f7f7f2)",
        color: "var(--ink, #172c25)",
      }}
    >
      <section
        style={{
          width: "min(100%, 480px)",
          padding: "clamp(24px, 5vw, 40px)",
          border: "1px solid var(--line, #e6e9e1)",
          borderRadius: 24,
          background: "var(--white, #fff)",
          boxShadow: "var(--shadow, 0 18px 50px rgba(27,53,41,.07))",
        }}
      >
        <p style={{ margin: "0 0 10px", color: "var(--green, #176b4d)", fontSize: 12, fontWeight: 800, letterSpacing: 1.2, textTransform: "uppercase" }}>
          Kerala Learning Hub
        </p>
        <h1 style={{ margin: "0 0 12px", fontSize: "clamp(1.5rem, 5vw, 2rem)", lineHeight: 1.2 }}>
          This page hit a snag
        </h1>
        <p style={{ margin: "0 0 24px", color: "var(--muted, #6e7d75)", lineHeight: 1.7 }}>
          Your saved study data has not been intentionally changed. Try loading the page again.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            border: 0,
            borderRadius: 999,
            padding: "12px 18px",
            background: "var(--green, #176b4d)",
            color: "#fff",
            fontWeight: 700,
            minHeight: 44,
          }}
        >
          Try again
        </button>
        {process.env.NODE_ENV === "development" && (
          <pre style={{ overflowWrap: "anywhere", whiteSpace: "pre-wrap", color: "#8b2f2f", fontSize: 12 }}>
            {error.message}
          </pre>
        )}
      </section>
    </main>
  );
}
