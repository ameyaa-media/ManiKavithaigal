import type { Metadata } from "next";
import { Inter, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTamil = Noto_Sans_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mani Kavithaigal - Tamil Author & Writer",
    template: "%s | Kavithayini Mani Arjunan",
  },
  description:
    "Official website of Kavithayini Mani Arjunan - Award-winning Tamil author, writer, and literary contributor. Explore books, awards, gallery, and more.",
  keywords: [
    "Tamil author",
    "Tamil literature",
    "Tamil books",
    "writer",
    "author",
  ],
  authors: [{ name: "Kavithayini Mani Arjunan" }],
  creator: "Kavithayini Mani Arjunan",
  openGraph: {
    type: "website",
    locale: "ta_IN",
    url: "https://Manikavithaigal.netlify.app",
    title: "Kavithayini Mani Arjunan - Tamil Author & Writer",
    description:
      "Official website of Kavithayini Mani Arjunan - Award-winning Tamil author and writer",
    siteName: "Kavithayini Mani Arjunan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mani Kavithaigal - Tamil Author & Writer",
    description:
      "Official website of Kavithayini Mani Arjunan - Award-winning Tamil author and writer",
  },
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";

// ... existing code ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansTamil.variable} font-sans antialiased bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
