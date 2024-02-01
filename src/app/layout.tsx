import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuadB Tech",
  description: "Front-End Assignment",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-slate-900 to-stone-700`}
      >
        <main>
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
