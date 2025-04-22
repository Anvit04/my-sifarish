import "./globals.css";
import { LayoutController } from "@/components/LayoutController";
import PageLayout from "@/components/PageLayout";
// import favIcon from '../../src/app/favicon_ms.ico'

export const metadata = {
  title: "MySifarish – The Home of Trusted Recommendations",
  description: "Discover places to eat, stay, and explore with personalised recommendations from real people. No fake reviews. No paid rankings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="icon" href='mySifarish_favIcon.png' type="image/x-icon" />
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