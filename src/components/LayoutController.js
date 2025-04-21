// components/LayoutController.js
'use client';

import { useSearchParams } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const LayoutContext = createContext({ hideLayout: false });

export function LayoutController({ children }) {
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

export function useLayoutContext() {
  return useContext(LayoutContext);
}