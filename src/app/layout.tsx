import Head from "next/head";
import "./globals.css";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { Coda } from "next/font/google";

const coda = Coda({ subsets: ["latin"], weight: ['400'], });

export const metadata: Metadata = {
  title: "Shay Asanova",
  description: "ReactJS, NextJs developer in Dubai",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="description" content="ReactJS, NextJs developer in Dubai" />
      </Head>
      <body className={coda.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
