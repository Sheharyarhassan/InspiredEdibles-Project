"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/Common/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/app/Common/Footer";
import Terminals from "@/app/terminal/Terminals";
import {TerminalContextProvider} from "react-terminal";
import React, {useState,useEffect} from "react";
import 'boxicons/css/boxicons.min.css';
import GlobalKeyRedirect from "@/app/Common/GlobalKeyRedirect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header toggleTerminal={() => setIsTerminalOpen((prev) => !prev)}/>
        <div style={{ minHeight: "50vh" }}>
          {(isTerminalOpen && isClient) &&<TerminalContextProvider><Terminals closeTerminal={()=>setIsTerminalOpen(false)}/></TerminalContextProvider>}
          <GlobalKeyRedirect toggleTerminal={() => setIsTerminalOpen((prev) => !prev)}>
            {children}
          </GlobalKeyRedirect>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
