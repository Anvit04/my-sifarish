import "./globals.css";
import { Footer, Header } from "@/common";
import MenuProvider from "@/common/MenuProvider";
// import Head from "next/head";
// import { Fredoka } from "next/font/google";


// const fredoka = Fredoka({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

export const metadata = {
  title: "My Sifarish App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>

      <body
      // className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} antialiased`}
      // className={fredoka.className}
      >

        <MenuProvider>
          <Header />
          {children}

          <Footer />
        </MenuProvider>
      </body>
    </html>
  );
}
