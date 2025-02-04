import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Your Histories",
  description: "You can add your presonal histories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
