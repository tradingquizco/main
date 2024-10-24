import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LayoutProvider from "@/provider/LayoutProvider";

export const metadata: Metadata = {
  title: "TradingQuiz",
  description: "best paltform for learing trade",
  icons: {
    icon:'/logo.svg',
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
