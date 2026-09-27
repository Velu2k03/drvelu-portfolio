import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const title = "Velu Murugan | AI Automation Engineer";
const description =
  "AI automation with n8n, Python, and LLM integrations. Explore Velu Murugan’s projects, GitHub, video intro, and resume. Open to remote junior AI roles.";

export const metadata: Metadata = {
  metadataBase: new URL("https://drvelu-portfolio.vercel.app"),
  title: { default: title, template: "%s | Velu Murugan" },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Velu Murugan",
  },
  twitter: { card: "summary", title, description },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:p-4 focus:text-stone-900"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
