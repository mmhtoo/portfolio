import type { Metadata } from "next";
import "./globals.css";
import { robotoMono } from "@/constants";

export const metadata: Metadata = {
  title: "Myo Min Htoo",
  description: "A Web | Mobile Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
