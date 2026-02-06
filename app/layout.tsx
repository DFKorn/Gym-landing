import type { Metadata } from "next";
import { Montserrat, Mulish } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gym Landing Page",
  description: "A landing page for a gym",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${mulish.variable} antialiased`}>
        <header className=" py-2 w-full md:h-[92px] h-[88px]  bg-[#1E5B43]"></header>
        {children}
      </body>
    </html>
  );
}
