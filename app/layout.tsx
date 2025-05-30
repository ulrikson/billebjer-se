import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://billebjer.se"),
  title: "Erik Billebjer Ulrikson - Billebjer Konsult AB",
  description:
    "Portfolio of Erik Billebjer Ulrikson, showcasing projects and skills.",
  keywords: [
    "Erik Billebjer Ulrikson",
    "Billebjer Konsult AB",
    "Software Engineer",
    "Full Stack Developer",
    "Product Manager",
  ],
  authors: [{ name: "Erik Billebjer Ulrikson" }],
  creator: "Erik Billebjer Ulrikson",
  publisher: "Erik Billebjer Ulrikson",
  openGraph: {
    title: "Erik Billebjer Ulrikson - Billebjer Konsult AB",
    description: "Explore the portfolio of Erik Billebjer Ulrikson.",
    url: "https://billebjer.se",
    siteName: "Erik Billebjer Ulrikson Portfolio",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
