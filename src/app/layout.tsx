import type { Metadata } from "next";
import { GeistSans, GeistMono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = GeistSans({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = GeistMono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Vercity Portal",
    description: "A Next.js project for Vercity Portal",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
            <head>
                <Script
                    crossOrigin="anonymous"
                    src="//unpkg.com/same-runtime/dist/index.global.js"
                />
            </head>
            <body suppressHydrationWarning className="antialiased">
                <ClientBody>{children}</ClientBody>
            </body>
        </html>
    );
}