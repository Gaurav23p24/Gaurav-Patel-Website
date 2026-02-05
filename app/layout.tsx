import type { Metadata } from "next";
import {
  Roboto,
  Playwrite_GB_J_Guides,
  Jacquard_12_Charted,
  Quintessential,
  Fleur_De_Leah,
  Metamorphous,
} from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const playwriteGB = Playwrite_GB_J_Guides({
  weight: "400",
  variable: "--font-playwrite",
});

const jacquard = Jacquard_12_Charted({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jacquard",
});

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-quintessential",
});

const fleurDeLeah = Fleur_De_Leah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fleur-de-leah",
});

const metamorphous = Metamorphous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-metamorphous",
});

export const metadata: Metadata = {
  title: "Gaurav Patel",
  description: "Personal portfolio",
  icons: {
    icon: "/videos/favicon/icons8-product-24.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${playwriteGB.variable} ${jacquard.variable} ${quintessential.variable} ${fleurDeLeah.variable} ${metamorphous.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
