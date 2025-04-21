// "use client";

// import { useState, useEffect, createContext, useContext } from "react";

// // Context API for managing menu state globally
// const MenuContext = createContext();

// export function useMenu() {
//   return useContext(MenuContext);
// }

// export default function MenuProvider({ children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("menu-open");
//     } else {
//       document.body.classList.remove("menu-open");
//     }
//   }, [isOpen]);

//   return (
//     <MenuContext.Provider value={{ isOpen, setIsOpen }}>
//       {children}
//     </MenuContext.Provider>
//   );
// }



// common/MenuProvider.js
"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { useSearchParams } from "next/navigation";

const MenuContext = createContext();

export function useMenu() {
  return useContext(MenuContext);
}

export default function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  // Toggle menu-open class
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  // Theme switching logic based on platform=mobile
  useEffect(() => {
    const isMobilePlatform = searchParams.get("platform") === "mobile";

    if (isMobilePlatform) {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    }
  }, [searchParams]);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}