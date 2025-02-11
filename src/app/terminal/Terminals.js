"use client";

import React, { useEffect, useRef, useState } from "react";
import { ReactTerminal } from "react-terminal";
import Head from "next/head";
import MusicPlayer from "@/app/Common/Components/MusicPlayer";
import {useRouter} from "next/navigation";

const Terminals = ({ closeTerminal }) => {
   const [isMounted, setIsMounted] = useState(false);
   const terminalRef = useRef(null);
   const [position, setPosition] = useState({ x: 100, y: 100 });
   const [dragging, setDragging] = useState(false);
   const [offset, setOffset] = useState({ x: 0, y: 0 });
   const [size, setSize] = useState({ width: 700, height: 500 });
   const [resizing, setResizing] = useState(false);
   const [commandHistory, setCommandHistory] = useState([]); // Store command history
   const audioRef = useRef(null);
   const [isPlaying, setIsPlaying] = useState(false);
   const router = useRouter();
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

   const executeCommand = (command) => {
      setCommandHistory((prevHistory) => {
         const updatedHistory = [...prevHistory, command];
         return updatedHistory;
      });

      const commandName = command.split(" ")[0]; // Extract the command
      const args = command.split(" ").slice(1); // Extract arguments

      if (commands[commandName]) {
         return commands[commandName](...args);
      } else {
         return unknownCommand(command);
      }
   };

   // Terminal commands
   const commands = {
      help: () => {
         setCommandHistory((prevHistory) => {
            const updatedHistory = [...prevHistory];
            if (!updatedHistory.includes('help')) {
               updatedHistory.push('help')
            }
            return updatedHistory;
         });
         return (
            <>
               <h4 className="my-3 fw-bold">Available commands:</h4>
               <p><span className="fw-bold">history: </span> Show command history</p>
               <p><span className="fw-bold">help: </span> List available commands</p>
               <p><span className="fw-bold">close: </span> Close the terminal</p>
               <p><span className="fw-bold">clear: </span> Clear the terminal</p>
               <p><span className="fw-bold">music: </span> Plays/Pauses Music</p>
               <p><span className="fw-bold">contact: </span> Shows Contact Details</p>
            </>
         )
      },
      close: closeTerminal,
      history: () =>{
         setCommandHistory((prevHistory) => {
            const updatedHistory = [...prevHistory];
            if (!updatedHistory.includes('history')) {
               updatedHistory.push('history')
            }
            return updatedHistory;
         });
         return(commandHistory.map((command,index)=>{
            return(
               <>
                  <p className="mb-2" key={index}>{command}</p>
               </>
            )
         }))
      },
      music: ()=>{
         setCommandHistory((prevHistory) => {
            const updatedHistory = [...prevHistory];
            if (!updatedHistory.includes('music')) {
               updatedHistory.push('music')
            }
            return updatedHistory;
         });
         if (!audioRef.current) return;
         if (isPlaying) {
            audioRef.current.pause();
         } else {
            audioRef.current.play();
         }
         setIsPlaying(!isPlaying);
      },
      contact:()=>{
         setCommandHistory((prevHistory) => {
            const updatedHistory = [...prevHistory];
            if (!updatedHistory.includes('contact')) {
               updatedHistory.push('contact')
            }
            return updatedHistory;
         });
         router.push('/contact');
         closeTerminal();
      }
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
               welcomeMessage={"Welcome to the Inspired Edibles!"}
               unknownCommand={unknownCommand}
               prompt="user:~$"
               style={{ height: "100%", flexGrow: 1, overflowY: "auto" }}
               showControlButtons={false}
            />
         </div>
         <MusicPlayer audioRef={audioRef} src="/assets/Xylophone.mp3"/>
         <div className="resize-handle" onMouseDown={handleResizeMouseDown}></div>
      </div>
   );
};

export default Terminals;
