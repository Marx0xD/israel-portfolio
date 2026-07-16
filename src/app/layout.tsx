import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Israel Asefa · Backend Engineer",
  description:
    "Backend engineer designing and operating complex systems across APIs, data, workflows, integrations, infrastructure, and production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${instrumentSans.variable} ${jetBrainsMono.variable}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
