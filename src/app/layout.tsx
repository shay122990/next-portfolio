import "./globals.css";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { Coda } from "next/font/google";

const coda = Coda({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Shay Asanova",
  description: "ReactJS, NextJs developer in Dubai",
  icons: {
    icon: "/images/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={coda.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
