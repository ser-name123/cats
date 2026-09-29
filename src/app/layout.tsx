import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030712",
};

export const metadata: Metadata = {
  title: "CATS COMPUTERS L.L.C | IT Solutions, Networking, Cybersecurity & Cloud in Dubai, UAE",
  description: "CATS COMPUTERS L.L.C is a premier technology solutions provider in Dubai, UAE. End-to-end IT services across infrastructure, enterprise networking, cybersecurity, security systems, cloud & software development. Integrating Technology. Empowering Business.",
  keywords: [
    "CATS Computers LLC",
    "IT Solutions Dubai",
    "Networking Solutions UAE",
    "Cybersecurity Dubai",
    "Security Solutions Dubai",
    "IP CCTV Installation Dubai",
    "Bur Dubai IT Company",
    "Computer Accessories Dubai",
    "Cloud & Software Development UAE",
    "AMC IT Support Dubai"
  ],
  authors: [{ name: "CATS COMPUTERS L.L.C" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712]" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
