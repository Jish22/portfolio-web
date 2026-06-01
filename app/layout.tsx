import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joshua Belser | Software Engineer",
  description:
    "Portfolio for Joshua Belser, a product-minded software engineer and data engineer based in Chicago.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
