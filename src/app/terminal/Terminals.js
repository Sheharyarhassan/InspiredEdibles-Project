"use client";

import React, { useEffect, useRef, useState } from "react";
import { ReactTerminal } from "react-terminal";
import Head from "next/head";

const Terminals = ({ closeTerminal }) => {
   const [isMounted, setIsMounted] = useState(false);
   const terminalRef = useRef(null);
   const [position, setPosition] = useState({ x: 100, y: 100 });
   const [dragging, setDragging] = useState(false);
   const [offset, setOffset] = useState({ x: 0, y: 0 });
   const [size, setSize] = useState({ width: 500, height: 300 });
   const [resizing, setResizing] = useState(false);

   // Ensure terminal only renders on the client
   useEffect(() => {
      setIsMounted(true);
   }, []);

   // Dragging functionality
   const handleMouseDown = (e) => {
      setDragging(true);
      setOffset({
         x: e.clientX - position.x,
         y: e.clientY - position.y,
      });
   };

   const handleResizeMouseDown = (e) => {
      e.stopPropagation(); // Prevent drag interference
      setResizing(true);
   };

   useEffect(() => {
      const handleMouseMove = (e) => {
         if (dragging) {
            setPosition({
               x: e.clientX - offset.x,
               y: e.clientY - offset.y,
            });
         }
         if (resizing) {
            setSize({
               width: Math.max(300, e.clientX - position.x),
               height: Math.max(200, e.clientY - position.y),
            });
         }
      };

      const handleMouseUp = () => {
         setDragging(false);
         setResizing(false);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
         document.removeEventListener("mousemove", handleMouseMove);
         document.removeEventListener("mouseup", handleMouseUp);
      };
   }, [dragging, resizing, offset, position]);

   // Terminal commands
   const commands = {
      help: () =>
         `Available commands:\n- whoami: Display user information\n- cd [directory]: Change to a specified directory\n- help: List available commands\n- close: Close the terminal`,
      whoami: () => "jackharper",
      cd: (directory) => {
         if (!directory || directory.trim() === "") {
            return "Error: No directory specified.";
         }
         return `Changed path to ${directory}`;
      },
      close: closeTerminal,
   };

   const unknownCommand = (command) =>
      `Error: Command '${command}' not recognized. Type 'help' for available commands.`;

   return (
      <div
         ref={terminalRef}
         className="terminal-window"
         style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: `${size.width}px`,
            height: `${size.height}px`,
         }}
      >
         <div className="terminal-header" onMouseDown={handleMouseDown}>
            Terminal
            <button className="terminal-close" onClick={closeTerminal}>X</button>
         </div>
         <div className="terminal-body">
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
         {/* Resize Handle */}
         <div className="resize-handle" onMouseDown={handleResizeMouseDown}></div>
      </div>
   );
};

export default Terminals;
