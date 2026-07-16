import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL("https://www.puentequinto.com.ar");

export const metadata: Metadata = {
  title: "Puente Quinto",
  description:
    "Puente Quinto es una banda de soul, funk y baladas de Villa Mercedes, San Luis. Música, videos, shows y contacto.",
  metadataBase,
  openGraph: {
    title: "Puente Quinto",
    description:
      "Puente Quinto es una banda de soul, funk y baladas de Villa Mercedes, San Luis. Música, videos, shows y contacto.",
    type: "website",
    url: metadataBase.toString(),
    siteName: "Puente Quinto",
    images: [
      {
        url: "/images/banda.jpg",
        width: 1200,
        height: 630,
        alt: "Puente Quinto banda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puente Quinto",
    description:
      "Puente Quinto es una banda de soul, funk y baladas de Villa Mercedes, San Luis. Música, videos, shows y contacto.",
    images: ["/images/banda.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
