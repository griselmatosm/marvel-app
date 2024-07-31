import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoFont = Roboto_Condensed({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Marvel characters app",
  description: "An app that lists Marvel characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.className} antialiased`}>
        <header>Header</header>
        {children}
      </body>
    </html>
  );
}
