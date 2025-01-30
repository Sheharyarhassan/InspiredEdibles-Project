"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/Common/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/app/Common/Footer";
import Terminals from "@/app/terminal/Terminals";
import {TerminalContextProvider} from "react-terminal";
import React, {useState} from "react";
import 'boxicons/css/boxicons.min.css';

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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header toggleTerminal={() => setIsTerminalOpen((prev) => !prev)}/>
        <div style={{ minHeight: "85vh" }}>
          {isTerminalOpen &&<TerminalContextProvider><Terminals/></TerminalContextProvider>}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
