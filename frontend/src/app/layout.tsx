import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Pacifico } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const pacifico = Pacifico({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "DR Food · Street food premium à Paris 14",
  description: "DR Food, smash burgers, panuozzo italien et desserts maison. Street food premium à la Porte de Vanves, Paris 14.",
  openGraph: {
    title: "DR Food · Street food premium à Paris 14",
    description: "Smash burgers, panuozzo italien et desserts maison, à deux pas de la Porte de Vanves.",
    siteName: "DR Food",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  themeColor: "#1a0f2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} ${pacifico.variable}`}>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}
