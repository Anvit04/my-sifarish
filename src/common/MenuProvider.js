// "use client";

// import { useState, useEffect, createContext, useContext } from "react";
// import { useSearchParams } from "next/navigation";

// const MenuContext = createContext();

// export function useMenu() {
//   return useContext(MenuContext);
// }

// export default function MenuProvider({ children }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const searchParams = useSearchParams();

//   // Toggle menu-open class
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("menu-open");
//     } else {
//       document.body.classList.remove("menu-open");
//     }
//   }, [isOpen]);

//   // Theme switching logic based on platform=mobile
//   useEffect(() => {
//     const isMobilePlatform = searchParams.get("platform") === "mobile";

//     if (isMobilePlatform) {
//       document.body.classList.add("light-theme");
//       document.body.classList.remove("dark-theme");
//     } else {
//       document.body.classList.add("dark-theme");
//       document.body.classList.remove("light-theme");
//     }
//   }, [searchParams]);

//   return (
//     <MenuContext.Provider value={{ isOpen, setIsOpen }}>
//       {children}
//     </MenuContext.Provider>
//   );
// }

'use client';

import {
  useState,
  useEffect,
  createContext,
  useContext,
  Suspense,
} from 'react';
import { useSearchParams } from 'next/navigation';

const MenuContext = createContext();

export function useMenu() {
  return useContext(MenuContext);
}

function MenuLogic({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  useEffect(() => {
    const isMobilePlatform = searchParams.get('platform') === 'mobile';

    if (isMobilePlatform) {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
  }, [searchParams]);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export default function MenuProvider({ children }) {
  return (
    <Suspense fallback={null}>
      <MenuLogic>{children}</MenuLogic>
    </Suspense>
  );
}
