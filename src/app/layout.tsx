import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduardo Drozda - Welcome",
};

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br'">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
