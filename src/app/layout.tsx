import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kerala Learning Hub — Learn at your pace",
  description: "A welcoming learning space for Kerala students. Explore classes, subjects, revision plans and study tools in one place.",
  applicationName: "Kerala Learning Hub",
  keywords: ["Kerala syllabus", "school learning", "study planner", "learning hub"],
  openGraph: { title: "Kerala Learning Hub", description: "Your learning journey, made clearer.", type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f7f2" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
