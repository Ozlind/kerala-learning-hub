"use client";

import { useEffect, useRef, useState } from "react";

export default function PwaRuntime() {
  const [online, setOnline] = useState(true);
  const [restored, setRestored] = useState(false);
  const restoredTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOnline(navigator.onLine);

    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // The core learning experience must remain usable if registration is unavailable.
      });
    }

    const handleOffline = () => {
      setOnline(false);
      setRestored(false);
      if (restoredTimer.current) clearTimeout(restoredTimer.current);
    };
    const handleOnline = () => {
      setOnline(true);
      setRestored(true);
      if (restoredTimer.current) clearTimeout(restoredTimer.current);
      restoredTimer.current = setTimeout(() => setRestored(false), 3200);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
      if (restoredTimer.current) clearTimeout(restoredTimer.current);
    };
  }, []);

  if (online && !restored) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: "0 0 auto",
        zIndex: 10000,
        padding: "10px 16px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: 600,
        color: online ? "#14532d" : "#ffffff",
        background: online ? "#dcfce7" : "#292524",
        borderBottom: online ? "1px solid #bbf7d0" : "1px solid #57534e",
      }}
    >
      {online
        ? "Connection restored. Your saved study progress is still on this device."
        : "You’re offline. Saved progress still works; previously opened lessons may be available."}
    </div>
  );
}
