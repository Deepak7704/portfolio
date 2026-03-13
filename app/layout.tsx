import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Playfair_Display } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});



export const metadata: Metadata = {
  title: "Veluvolu Deepak",
  description:
    "Full-Stack AI Engineer building end-to-end systems that solve real problems.",
  openGraph: {
    title: "Veluvolu Deepak",
    description:
      "Full-Stack AI Engineer building end-to-end systems that solve real problems.",
    images: [{ url: "/og.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veluvolu Deepak",
    description:
      "Full-Stack AI Engineer building end-to-end systems that solve real problems.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
