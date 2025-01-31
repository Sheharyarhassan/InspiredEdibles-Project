"use client";

import React, { useEffect, useState } from "react";
import { ReactTerminal } from "react-terminal";
import Head from "next/head";

const Terminals = ({closeTerminal}) => {
   const [isMounted, setIsMounted] = useState(false);

   // Ensure terminal only renders on the client
   useEffect(() => {
      setIsMounted(true);
   }, []);

   // Prevent rendering of terminal during SSR
   if (!isMounted) {
      return null;
   }

   // Terminal commands
   const commands = {
      help: () =>
         `Available commands:\n- whoami: Display user information\n- cd [directory]: Change to a specified directory\n- help: List available commands`,
      whoami: () => "jackharper",
      cd: (directory) => {
         if (!directory || directory.trim() === "") {
            return "Error: No directory specified.";
         }
         return `Changed path to ${directory}`;
      },
      close: ()=> closeTerminal(),
   };

   const unknownCommand = (command) =>
      `Error: Command '${command}' not recognized. Type 'help' for available commands.`;

   return (
      <div style={{ height: "50vh", display: "flex", flexDirection: "column" }}>
         <Head>
            <title>Terminal - Stripe</title>
         </Head>
         <ReactTerminal
            commands={commands}
            welcomeMessage={"Welcome to the Terminal!"}
            unknownCommand={unknownCommand}
            prompt="user@game:~$"
            style={{ height: "100%", flexGrow: 1, overflowY: "auto" }}
         />
      </div>
   );
};

export default Terminals;
