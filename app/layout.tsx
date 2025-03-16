import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { Nunito } from "next/font/google";
import ContextProvider from "@/providers/ContextProvider";
import { Toaster } from "react-hot-toast";
import ButtonChat from "@/components/ButtonChat";

export const metadata: Metadata = {
  title: "Kwizi",
  description: "Pembelajaran berbasis kuis",
  icons: {
    icon: "/logo--quizzer.svg",
    apple: "/logo--quizzer.svg",
    shortcut: "/logo--quizzer.svg",
  },
};

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
});

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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <ClerkProvider>
        <ContextProvider>
          <body className={`${nunito.className} antialiased relative`}>
            <Toaster position="top-center" />
            <Header />
            <main className="py-8 px-[8rem] h-full">{children}</main>
            <ButtonChat />
          </body>
        </ContextProvider>
      </ClerkProvider>
    </html>
  );
}
