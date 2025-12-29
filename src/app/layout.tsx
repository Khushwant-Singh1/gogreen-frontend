import type { Metadata } from "next";
import { Jost, Open_Sans } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Vidhi Enterprises | Smart Irrigation Solutions",
  description: "Engineering Smart Irrigation Solutions for a Greener Tomorrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body
        className={`${jost.variable} ${openSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
