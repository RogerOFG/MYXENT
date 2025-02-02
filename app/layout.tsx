import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "./ui/fonts";
import { Header } from "./components/Header"
import { Footer } from "./components/Footer";
import { Theme } from "./components/Theme";

export const metadata: Metadata = {
  title: "MyXENT",
  description: "Blog de información de dispositivos moviles",
};

const url = "/img"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      <body className={`${rubik.className} antialiased relative flex flex-col min-h-[100vh] bg-[#f2f2f2] dark:bg-[#0a0a0a] text-[#171717] dark:text-[#ededed]`} >
        <Theme />

        <Header patch={url} />

        <main className={`flex-1`}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
