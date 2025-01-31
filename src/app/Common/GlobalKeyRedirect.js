"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GlobalKeyRedirect = ({ children, toggleTerminal }) => {
   const router = useRouter();
   var terminalEditor;
   useEffect(() => {
      terminalEditor = document.querySelector("#terminalEditor");
      const handleKeyPress = (event) => {
         const activeElement = document.activeElement;
         if (
            activeElement &&
            (activeElement.tagName === "INPUT" ||
               activeElement.tagName === "TEXTAREA" ||
               activeElement.isContentEditable || terminalEditor)) {
            return; // Do nothing if user is typing
         }

         switch (event.key.toLowerCase()) {
            case "m":
               router.push("/Blogmode");
               break;
            case "y":
               window.location.href = "https://www.instagram.com";
               break;
            case "b":
               router.push("/boomermode");
               break;
            case "c":
               toggleTerminal();
               break;
            default:
               break;
         }
      };
         document.addEventListener("keydown", handleKeyPress);
      return () => {
         // Clean up event listeners
         document.removeEventListener("keydown", handleKeyPress);
      };
   }, [router, toggleTerminal,terminalEditor]);

   return <>{children}</>;
};

export default GlobalKeyRedirect;
