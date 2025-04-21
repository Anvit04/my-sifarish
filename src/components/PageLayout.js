'use client';

import { Footer, Header } from "@/common";
import { useLayoutContext } from "./LayoutController";
import MenuProvider from "@/common/MenuProvider";

export default function PageLayout({ children }) {
  const { hideLayout } = useLayoutContext();

  return (
    <MenuProvider>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </MenuProvider>
  );
}
