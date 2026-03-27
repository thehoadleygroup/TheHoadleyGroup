import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Hoadley Group | Barefoot Realty & Investments",
    template: "%s | The Hoadley Group",
  },
  description:
    "The Hoadley Group is a South Florida real estate platform specializing in waterfront luxury, commercial investment, distressed assets, and family advisory services. Barefoot Realty & Investments, FL BK3222885.",
  keywords: [
    "luxury real estate Palm Beach",
    "waterfront real estate South Florida",
    "family advisory real estate Palm Beach",
    "Barefoot Realty Investments",
    "Benjamin Hoadley broker",
    "Palm Beach County real estate",
  ],
  openGraph: {
    siteName: "The Hoadley Group",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans antialiased"
        style={{ fontFamily: "var(--font-sans), Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
