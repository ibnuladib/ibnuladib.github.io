import type { Metadata } from "next";

import "../index.css";

export const metadata: Metadata = {
  title: "Ibnul Adib",
  description: "Projects, research, and notes from Ibnul Adib.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.json",
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
