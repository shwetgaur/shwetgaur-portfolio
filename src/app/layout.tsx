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

export const metadata: Metadata = {
  metadataBase: new URL("https://shwetgaur-portfolio.vercel.app"),
  title: "Shwet Gaur — AI/ML Engineer",
  description:
    "AI/ML engineer building LangGraph agents, RAG systems, and production APIs. Live demos, open source, published GenAI patent.",
  keywords: [
    "AI engineer",
    "ML engineer",
    "LangGraph",
    "RAG",
    "FastAPI",
    "Shwet Gaur",
  ],
  authors: [{ name: "Shwet Gaur", url: "https://github.com/shwetgaur" }],
  openGraph: {
    title: "Shwet Gaur — AI/ML Engineer",
    description:
      "I ship LangGraph agents, RAG, and production APIs — with live demos and evidence.",
    type: "website",
    siteName: "Shwet Gaur",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shwet Gaur — AI/ML Engineer",
    description:
      "LangGraph agents, RAG systems, and production APIs with live demos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
