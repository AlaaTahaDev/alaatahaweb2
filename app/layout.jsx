import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/Themeprovider";
import Home from "./page";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Alaa Taha Dev",
  description: "Alaa Taha Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8"/>
        <meta name="description" content="alaatahadev is a site for programming applications for Android and iOS"/>
        <meta name="keywords" content="alaatahadev , alaataha flutter , alaataha , alaataha dart , dart , nodejs , nodejs alaataha , alaa taha dev , alaa taha"/>
        <meta name="author" content="Alaa Taha"/>
      </head>
      <body className={outfit.className}>
       <ThemeProvider attribute='class' defaultTheme='light'>
       <Header/>
        {children}
        <Footer/>
       </ThemeProvider>
        </body>
    </html>
  );
}
