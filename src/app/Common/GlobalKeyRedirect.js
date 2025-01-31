"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GlobalKeyRedirect = ({ children,toggleTerminal }) => {
   const router = useRouter();

   useEffect(() => {
      const handleKeyPress = (event) => {
         if (event.key === "m" || event.key === "M") {
            router.push("/Blogmode");
         }
         if (event.key === "y" || event.key === "Y") {
            window.location.href = "https://www.instagram.com";
         }
         if (event.key === "b" || event.key === "B") {
            router.push("/boomermode");
         }
         if (event.key === "c" || event.key === "C") {
            toggleTerminal()
         }
      };

      // Attach event listener
      document.addEventListener("keydown", handleKeyPress);

      // Cleanup on unmount
      return () => {
         document.removeEventListener("keydown", handleKeyPress);
      };
   }, [router]);

   return <>{children}</>;
};

export default GlobalKeyRedirect;
