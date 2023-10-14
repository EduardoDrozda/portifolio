import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eduardo Drozda - Welcome",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br'">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
