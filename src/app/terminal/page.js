"use client";
import { useState } from "react";
import Terminals from "./Terminals";
import { TerminalContextProvider } from "react-terminal";

export default function TerminalPage() {
   const [showTerminal, setShowTerminal] = useState(false);

   return (
      <div>
         <button onClick={() => setShowTerminal(!showTerminal)}>
            {showTerminal ? "Close Terminal" : "Open Terminal"}
         </button>

         {showTerminal && (
            <TerminalContextProvider>
               <div style={{ position: "relative", border: "1px solid #ccc", padding: "10px" }}>
                  <button
                     onClick={() => setShowTerminal(false)}
                     style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "red",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        padding: "1px",
                        zIndex:'4'
                     }}
                  >
                     ✖
                  </button>
                  <Terminals />
               </div>
            </TerminalContextProvider>
         )}
      </div>
   );
}
