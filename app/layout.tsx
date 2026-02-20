import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "AMS IT Services | Digital Business Card",
    description: "Reliable IT solutions designed to keep your business running smoothly.",
    icons: {
        icon: "/logo.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
