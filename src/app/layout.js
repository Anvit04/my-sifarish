// import "./globals.css";
// import { Footer, Header } from "@/common";
// import MenuProvider from "@/common/MenuProvider";
// import { LayoutController, useLayoutContext } from "@/components/LayoutController";

// export const metadata = {
//   title: "My Sifarish App",
//   description: "",
// };

// // Layout wrapper with conditional header/footer
// function PageLayout({ children }) {
//   const { hideLayout } = useLayoutContext();

//   return (
//     <MenuProvider>
//       {!hideLayout && <Header />}
//       {children}
//       {!hideLayout && <Footer />}
//     </MenuProvider>
//   );
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com"  />
//         <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap" rel="stylesheet" />

//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="  />
//       </head>

//       <body>

//         <LayoutController>
//           <PageLayout>{children}</PageLayout>
//         </LayoutController>
//       </body>
//     </html>
//   );
// }



// app/layout.js
import "./globals.css";
import { LayoutController } from "@/components/LayoutController";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "My Sifarish App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <LayoutController>
          <PageLayout>{children}</PageLayout>
        </LayoutController>
      </body>
    </html>
  );
}