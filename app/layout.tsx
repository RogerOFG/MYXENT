import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "./ui/fonts";
import { Footer } from "./components/Footer";
import { Theme } from "./components/Theme";
import Image from "next/image";
import Link from "next/link";

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

        <header className="max-w-[90%] m-auto py-5">
            <div className="flex flex-col items-center justify-center w-[750px] max-w-full m-auto">
                <div className="w-full flex justify-center pb-4 border-b border-black dark:border-[#8b8b8b]">
                    <Image className="sm:w-[60px] w-[50px] dark:hidden" src={`${url}/logo_black.png`} width={100} height={100} alt="" />
                    <Image className="sm:w-[60px] w-[50px] hidden dark:block" src={`${url}/logo_white.png`} width={100} height={100} alt="" />
                </div>
                <div className="w-full pt-4">
                    <nav className="py-1 bg-gradient-to-r from-gray-400 via-black to-gray-400 dark:bg-gradient-to-r dark:from-black dark:via-gray-500 dark:to-black rounded-lg">
                        <ul className="flex justify-center gap-6 text-[15px] text-white">
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="/Products">Productos</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

        <main className={`flex-1`}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
