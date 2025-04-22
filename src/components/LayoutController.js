// // components/LayoutController.js
// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';

// const LayoutContext = createContext({ hideLayout: false });

// export function LayoutController({ children }) {
//   const searchParams = useSearchParams();
//   const [hideLayout, setHideLayout] = useState(false);

//   useEffect(() => {
//     const isMobilePlatform = searchParams.get('platform') === 'mobile';
//     setHideLayout(isMobilePlatform);
//   }, [searchParams]);

//   return (
//     <LayoutContext.Provider value={{ hideLayout }}>
//       {children}
//     </LayoutContext.Provider>
//   );
// }

// export function useLayoutContext() {
//   return useContext(LayoutContext);
// }

'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  Suspense,
} from 'react';
import { useSearchParams } from 'next/navigation';

const LayoutContext = createContext({ hideLayout: false });

function LayoutLogic({ children }) {
  const searchParams = useSearchParams();
  const [hideLayout, setHideLayout] = useState(false);

  useEffect(() => {
    const isMobilePlatform = searchParams.get('platform') === 'mobile';
    setHideLayout(isMobilePlatform);
  }, [searchParams]);

  return (
    <LayoutContext.Provider value={{ hideLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function LayoutController({ children }) {
  return (
    <Suspense fallback={null}>
      <LayoutLogic>{children}</LayoutLogic>
    </Suspense>
  );
}

export function useLayoutContext() {
  return useContext(LayoutContext);
}
