
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SignatureOverlay from "@/components/SignatureOverlay";
import MatrixField from "@/components/ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Israel Asefa",
  description: "Building fast, scalable apps with Spring Boot, FastAPI & Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          enableColorScheme
        >
          {/* Full-page particles behind everything */}
          <div className="relative">
             < MatrixField />
            {/* Your app content above the particles */}
            <div className="relative z-10">
              {children}
              <SignatureOverlay />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
