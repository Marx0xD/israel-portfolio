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
  title: "Israel Asefa",
  description:
    "Backend engineer for systems where mistakes have consequences: payments, balances, permissions, integrations, operations, and production failures.",
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
